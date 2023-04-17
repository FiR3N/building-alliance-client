import cls from "./Pagination.module.scss";
import { FC, Dispatch, SetStateAction } from "react";

interface PaginationProps {
  totalCount: number;
  page: number;
  limit: number;
  changePage: Dispatch<SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = ({
  totalCount,
  page,
  limit,
  changePage,
}) => {
  const pageCount: number = Math.ceil(totalCount / limit);
  const pages: number[] = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  if (pageCount == 1) {
    return <></>;
  }

  const handleChangePage = (page: number) => {};

  return (
    <div className={cls.pagination}>
      <>
        {page > 5 && (
          <>
            <div
              className={`${cls.paginationItem}  ${page === 1 && cls._active}`}
              onClick={() => changePage(1)}
            >
              1
            </div>
            <div
              className={`${cls.paginationItem}  ${page === 1 && cls._active}`}
            >
              ...
            </div>
          </>
        )}

        {pages.map((item) => {
          if (Math.abs(page - item) <= 4) {
            return (
              <div
                className={`${cls.paginationItem}  ${
                  page === item && cls._active
                }`}
                key={item}
                onClick={() => {
                  changePage(item),
                    window.scrollTo({
                      top: 130,
                      behavior: "smooth",
                    });
                }}
              >
                {item}
              </div>
            );
          }
        })}

        {totalCount > 6 &&
          page + 4 != pageCount &&
          page + 3 != pageCount &&
          page + 2 != pageCount &&
          page + 1 != pageCount &&
          page != pageCount && (
            <>
              <div
                className={`${cls.paginationItem}  ${
                  page === 1 && cls._active
                }`}
              >
                ...
              </div>
              <div
                className={`${cls.paginationItem}  ${
                  page === pageCount && cls._active
                }`}
                onClick={() => {
                  changePage(pageCount),
                    window.scrollTo({
                      top: 130,
                      behavior: "smooth",
                    });
                }}
              >
                {pageCount}
              </div>
            </>
          )}
      </>
    </div>
  );
};

export default Pagination;
