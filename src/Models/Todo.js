import { v4 as uuidv4 } from "uuid";

class Todo {
  constructor({ uuid = uuidv4(), content = "Empty", checked = false }) {
    this.uuid = uuid;
    this.content = content;
    this.checked = checked;
  }

  getUuid = () => this.uuid;
  getChecked = () => this.checked;
  getContent = () => this.content;

  setChecked = (check) => {
    this.checked = check;
  };
}

export default Todo;
