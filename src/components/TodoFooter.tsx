import React from 'react';
import { Filter } from '../types/Filter';

type Props = {
  activeTodosCount: number;
  filter: Filter;
  hasCompletedTodos: boolean;
  handleFilterClick: (
    value: Filter,
  ) => (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const TodoFooter: React.FC<Props> = ({
  activeTodosCount,
  filter,
  hasCompletedTodos,
  handleFilterClick,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodosCount} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={
            filter === Filter.All ? 'filter__link selected' : 'filter__link'
          }
          data-cy="FilterLinkAll"
          onClick={handleFilterClick(Filter.All)}
        >
          All
        </a>

        <a
          href="#/active"
          className={
            filter === Filter.Active ? 'filter__link selected' : 'filter__link'
          }
          data-cy="FilterLinkActive"
          onClick={handleFilterClick(Filter.Active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={
            filter === Filter.Completed
              ? 'filter__link selected'
              : 'filter__link'
          }
          data-cy="FilterLinkCompleted"
          onClick={handleFilterClick(Filter.Completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!hasCompletedTodos}
      >
        Clear completed
      </button>
    </footer>
  );
};
