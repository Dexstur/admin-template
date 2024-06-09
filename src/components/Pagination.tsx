import { FC } from "react";
import { Pagination } from "react-bootstrap";

interface Props {
  currentPage?: number;
  pages: number;
  onPageChange: (page: number) => void;
}

export const CustomPagination: FC<Props> = ({
  currentPage = 1,
  pages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageItems = [];

    // Add first and previous buttons
    pageItems.push(
      <Pagination.First
        key="first"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      />
    );
    pageItems.push(
      <Pagination.Prev
        key="prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
    );

    // Add page numbers with ellipsis logic
    if (pages <= 10) {
      for (let number = 1; number <= pages; number++) {
        pageItems.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => onPageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
    } else {
      let startPage, endPage;
      if (currentPage <= 5) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= pages) {
        startPage = pages - 9;
        endPage = pages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }

      for (let number = startPage; number <= endPage; number++) {
        pageItems.push(
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => onPageChange(number)}
          >
            {number}
          </Pagination.Item>
        );
      }

      if (startPage > 1) {
        pageItems.unshift(<Pagination.Ellipsis key="startEllipsis" />);
        pageItems.unshift(
          <Pagination.Item key={1} onClick={() => onPageChange(1)}>
            1
          </Pagination.Item>
        );
      }

      if (endPage < pages) {
        pageItems.push(<Pagination.Ellipsis key="endEllipsis" />);
        pageItems.push(
          <Pagination.Item key={pages} onClick={() => onPageChange(pages)}>
            {pages}
          </Pagination.Item>
        );
      }
    }

    // Add next and last buttons
    pageItems.push(
      <Pagination.Next
        key="next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pages}
      />
    );
    pageItems.push(
      <Pagination.Last
        key="last"
        onClick={() => onPageChange(pages)}
        disabled={currentPage === pages}
      />
    );

    return pageItems;
  };

  return <Pagination>{renderPageNumbers()}</Pagination>;
};
