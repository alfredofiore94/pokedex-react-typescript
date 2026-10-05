interface paginationProps {
  selectedPage: number;
  minValuePages: number;
  maxValuePages: number;
  selectPageFn: (select: number) => void;
}

function PaginationTable({
  selectedPage,
  minValuePages,
  maxValuePages,
  selectPageFn,
}: paginationProps) {
  const buttonsPagination = [];
  for (let i = minValuePages; i <= maxValuePages; i++) {
    buttonsPagination.push(
      <button
        key={i}
        className={
          i == selectedPage ? "join-item btn btn-active" : "join-item btn"
        }
        onClick={() => selectPageFn(i)}
      >
        {i}
      </button>,
    );
  }
  return <div className="join">{buttonsPagination}</div>;
}
export default PaginationTable;
