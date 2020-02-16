import React from 'react';

// import Components
import Field from 'src/components/Field';

// import styled
import SettingsStyled from './SettingsStyled';


const Settings = () => (
  <SettingsStyled>
    <form
      autoComplete="off"
    >
      <Field
        className="settingField"
        name="pseudo"
        type="text"
      />
      <Field
        className="settingField"
        name="password"
        type="password"
      />
      <input
        className="submit"
        type="submit"
        value="envoyer"
      />
    </form>
  </SettingsStyled>
);

export default Settings;
