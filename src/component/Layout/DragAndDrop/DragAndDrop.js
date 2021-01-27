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

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/jpeg, image/png',
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
  const imageCanvas = image.map((i) => (
    <div key={i.name}>
      <img src={i.preview} alt={i.name} />
    </div>
  ));

  return (
    <>
      <div className={classes.DropZone} {...getRootProps({ style })}>
        <input type="file" {...getInputProps()} />
        <img src={uploadIcon} alt="upload" className={classes.uploadIcon} />
        <h1>Image with Recipe</h1>
        <h2>(Drag n Drop here)</h2>
      </div>
      {imageCanvas}
    </>
  );
};
export default DragAndDrop;
