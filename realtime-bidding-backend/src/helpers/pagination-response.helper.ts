/**
 * Constructs a pagination response object.
 *
 * This function constructs a pagination response object containing the records for the current page,
 * pagination information such as current page number, total pages, total records, and records per page.
 *
 * @param {any[]} records - The records to be included in the pagination response.
 * @param {number} page - The current page number.
 * @param {number} resPerPage - The number of records to display per page.
 * @param {number} count - The total number of records.
 * @returns {object} A pagination response object containing the records and pagination information.
 */
export const paginationResponse = (records, page, resPerPage, count) => {
  return {
    records,
    paginationInfo: {
      currentPage: Number(page),
      pages: Math.ceil(count / resPerPage),
      totalRecords: Number(count),
      perPage: Number(resPerPage),
    },
  };
};
