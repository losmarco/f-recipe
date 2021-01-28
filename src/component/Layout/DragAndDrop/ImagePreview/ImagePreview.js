const ImagePreview = ({ i }) => {
  return (
    <div key={i.name}>
      <img src={i.preview} alt={i.name} />
    </div>
  );
};

export default ImagePreview;
