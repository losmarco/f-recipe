import { useState, useEffect, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import uploadIcon from '../../../assets/icons/upload.svg';
import classes from '../DragAndDrop/DragAndDrop.module.scss';

const accept = {
  pointer: 'cursor',
  backgroundColor: '#dfe6e9',
  border: '4px dashed #1A202C',
};
const reject = {
  backgroundColor: '#f7f9fb',
  border: '4px dashed #d63031',
};

const DragAndDrop = () => {
  const [image, setImage] = useState([]);
  const [display, setDisplay] = useState(true);
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/jpeg, image/png',
    // onDrop set state and mount the canvas component
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(
    () => () => {
      console.log('unmount {dragAndDrop} and mount {ImageCanvas}');
      setDisplay(false);
      // Make sure to revoke the data uris to avoid memory leaks
      image.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [image]
  );

  // Drag and Drop accept and reject style
  const style = useMemo(
    () => ({
      ...(isDragAccept ? accept : {}),
      ...(isDragReject ? reject : {}),
    }),
    [isDragReject, isDragAccept]
  );

  //Image Component for editing
  const imageCanvas = image.map((i) => (
    <div key={i.name}>
      <img src={i.preview} alt={i.name} />
    </div>
  ));

  const dragAndDrop = (
    <div className={classes.DropZone} {...getRootProps({ style })}>
      <input type="file" {...getInputProps()} />
      <img src={uploadIcon} alt="upload" className={classes.uploadIcon} />
      <h1>Image with Recipe</h1>
      <h2>(Drag n Drop here)</h2>
    </div>
  );

  return (
    <>
      {/* if droped, unmount the dragAndDrop then mount imageCanvas */}
      {display ? dragAndDrop : imageCanvas}
    </>
  );
};
export default DragAndDrop;
