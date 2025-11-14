import React from 'react';

type Props = {
  isAllCompleted: boolean;
};

export const TodoHeader: React.FC<Props> = ({ isAllCompleted }) => {
  return (
    <header className="todoapp__header">
      <button
        type="button"
        className={
          isAllCompleted ? 'todoapp__toggle-all active' : 'todoapp__toggle-all'
        }
        data-cy="ToggleAllButton"
      />

      <form>
        <input
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  );
};
