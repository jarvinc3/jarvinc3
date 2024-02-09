import "../css/loader.css";

export default function Loader() {
  return (
    <div className="bg-[#111111] flex flex-col gap-5 justify-center items-center h-screen">
      <div className="spinner">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
      <div className="loader"></div>
    </div>
  );
}
