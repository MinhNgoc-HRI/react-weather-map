import classes from "./Loading.module.css";

const Loading = (props) => {
  return (
    <div className="flex jus-cen alg-cen" style={{height: '100%'}}>
      <div className={classes["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loading;
