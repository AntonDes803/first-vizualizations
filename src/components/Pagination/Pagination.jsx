import styles from "./Pagination.module.scss";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPages = () => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    return currentPage <= 2
      ? [1, 2, 3, "...", totalPages]
      : currentPage >= totalPages - 2
      ? [1, "...", totalPages - 2, totalPages - 1, totalPages]
      : [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
  };

  const handleClick = (page) => {
    if (page !== "..." && page !== currentPage) onPageChange(page);
  };

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <button
          className={styles.prev}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <svg className={styles.arrowIcon}>
            <use href="/sprite.svg#icon-schevron_bottom" />
          </svg>
        </button>
      )}

      <div className={styles.pages}>
        {getPages().map((page, idx) =>
          page === "..." ? (
            <span key={idx} className={styles.ellipsis}>
              ...
            </span>
          ) : (
            <button
              key={idx}
              onClick={() => handleClick(page)}
              className={`${styles.page} ${
                currentPage === page ? styles.active : ""
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {currentPage < totalPages && (
        <button
          className={`${styles.next} ${styles.prev}`}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <svg className={styles.arrowIconNext}>
            <use href="/sprite.svg#icon-schevron_bottom" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;
