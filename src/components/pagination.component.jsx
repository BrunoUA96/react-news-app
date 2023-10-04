export const Pagination = ({ activePage, setActivePage }) => {
  // Normal button classes
  const navButton =
    'cursor-pointer bg-gray-100 hover:bg-gray-300 text-gray-600 hover:text-gray-700 px-3 py-1';
  // Active button classes
  const activeNavButton =
    'bg-violet-100 hover:bg-violet-300 text-violet-600 hover:text-violet-700 px-3 py-1';

  const arrowChangePage = param => {
    setActivePage(param === '-' ? activePage - 1 : activePage + 1);
  };

  return (
    <div className="flex justify-center my-4">
      <ul className="flex gap-4">
        <li>
          <button
            className={navButton}
            disabled={activePage <= 1}
            onClick={() => arrowChangePage('-')}
          >
            {'<'}
          </button>
        </li>
        {[...Array(5)].map((_, index) => (
          <li key={index}>
            <button
              className={activePage === index + 1 ? activeNavButton : navButton}
              onClick={() => setActivePage(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            className={navButton}
            disabled={activePage === 5}
            onClick={() => arrowChangePage('+')}
          >
            {'>'}
          </button>
        </li>
      </ul>
    </div>
  );
};
