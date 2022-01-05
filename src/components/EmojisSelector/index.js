import React from "react";
import {
  allCategories,
  getGroupsByCategory,
} from "../../helpers/requestParamsDict";
import "./styles.css";
import { TextSelector } from "../shared/TextSelector";
import { EmojisGroupList } from "./List";

const INITIAL_CATEGORY = allCategories[0];
const INITIAL_GROUP = getGroupsByCategory(INITIAL_CATEGORY)[0];

export const EmojisSelector = ({ onSelectEmoji }) => {
  const [selectedCategory, setSelectedCategory] =
    React.useState(INITIAL_CATEGORY);
  const [selectedGroup, setSelectedGroup] = React.useState(INITIAL_GROUP);

  const groups = React.useMemo(
    () => getGroupsByCategory(selectedCategory) || [],
    [selectedCategory]
  );

  const onChangeCategory = React.useCallback((category) => {
    setSelectedGroup(getGroupsByCategory(category)[0]);
    setSelectedCategory(category);
  }, []);

  const onChangeGroup = React.useCallback((group) => {
    setSelectedGroup(group);
  }, []);

  return (
    <div className={"list"}>
      <h3>List of emojis</h3>
      <div className={"select-line"}>
        <div className={"select-line"}>
          <p>Category: </p>
          <TextSelector
            values={allCategories}
            selectedValue={selectedCategory}
            onChangeValue={onChangeCategory}
          />
        </div>
        <div className={"select-line"}>
          <p>Group:</p>
          <TextSelector
            values={groups}
            selectedValue={selectedGroup}
            onChangeValue={onChangeGroup}
          />
        </div>
      </div>
      <div style={{ height: 16 }} />
      <EmojisGroupList group={selectedGroup} onSelect={onSelectEmoji} />
    </div>
  );
};
