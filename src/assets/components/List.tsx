import { useState } from "react";
import { Li } from "../styles/styles";
import { FaTrash } from "react-icons/fa";
interface Activity {
  id: number;
  activity: string;
  completed: boolean;
}
interface Props {
  activity: Activity[];
  handleToggle: (id: number) => void;
  deleteItem: (id: number) => void;
}
const List = ({ activity, handleToggle, deleteItem }: Props) => {
          if(!activity.length) return <p>Nothing to do!🎉</p>
  return (
    <div>
      <ul>
        { (activity.length) &&
          [...activity].reverse().map((activity) => (
            <div className="d-flex justify-content-between mb-3" key={`${activity.id}+${activity}`}>
              <Li
                style={{
                  textDecoration: activity.completed ? "line-through" : "none",
                }}
                onClick={() => handleToggle(activity.id)}
                
              >
                {activity.activity}
              </Li>
              {activity.completed ? <span> - Task Complete</span> : ""}
              <button className="btn btn-outline-danger" onClick={() => deleteItem(activity.id)}><FaTrash /></button>{" "}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default List;
