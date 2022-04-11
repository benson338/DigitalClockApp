import { useContext, useState } from 'react';
import { SettingContext } from '../context/SettingContext';

const Settings = () => {
  const [newTimer, setNewTimer] = useState({
    work: 0.3,
    break: 0.15,
    active: 'work',
  });

  const { updateExecute } = useContext(SettingContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'work':
        setNewTimer({ ...newTimer, work: parseInt(value) });
        break;
      case 'break':
        setNewTimer({ ...newTimer, break: parseInt(value) });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  return (
    <div className="formContainer">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="work">
            Work:{' '}
            <input
              className="input"
              type="number"
              name="work"
              onChange={handleChange}
              value={newTimer.work}
            />
          </label>
          <label htmlFor="break">
            Break:{' '}
            <input
              className="input"
              type="number"
              name="break"
              onChange={handleChange}
              value={newTimer.break}
            />
          </label>
        </div>
        <button className="btn settings-btn" type="submit">
          Set Timer
        </button>
      </form>
    </div>
  );
};

export default Settings;
