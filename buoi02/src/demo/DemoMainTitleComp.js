import MainTitle from "../components/shared/MainTitle";

function DemoMainTitleComp() {
  return (
    <>
      <MainTitle>Title 1</MainTitle>
      <MainTitle btnLabel="view more" btnProps={{
        type: 'category',
        as: 'a'
      }}>Title 2</MainTitle>
      <MainTitle btnLabel="view more" btnProps={{
        type: 'primary',
        as: 'button'
      }}>Title 3</MainTitle>
    </>
  );
}

export default DemoMainTitleComp;