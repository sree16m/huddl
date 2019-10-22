import React from "react";

const UserSearch = props => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba bg-green bg-lightest-blue"
        type="search"
        placeholder="search user"
        onChange={props.searchChange}
        value={props.inputText}
      />
      <ul>
        {props.suggestions.map(item => {
          return (
            <li
              key={item.id}
              onClick={() => {
                props.suggestionSelected(item.username);
              }}
            >
              {item.username} ({item.name})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserSearch;
