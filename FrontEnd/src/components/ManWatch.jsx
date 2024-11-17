import ManPicture from "./ManPicture";
import FloatingWatch from "./FloatingWatch";

function ManWatch() {
  return (
    <>
      <div className="relative">
        <ManPicture />
        <div className="absolute bottom-[-210px] left-[-200px]">
          <FloatingWatch />
        </div>
      </div>
    </>
  );
}

export default ManWatch;
