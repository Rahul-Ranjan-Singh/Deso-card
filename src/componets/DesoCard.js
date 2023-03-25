import React, { useEffect, useState } from 'react';
import './DesoCard.css';
import DropDown from './DropDown';

const themeOptions = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];
const languageOptions = [
  { label: "English", value: "english" },
  { label: "Hindi", value: "hindi" },
];

const DesoCard = () => {
  const [selectedThemeOption, setSelectedThemeOption] = useState(themeOptions[0].value);
  const [selectedLanguageOption, setSelectedLanguageOption] = useState(themeOptions[0].value);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const language = localStorage.getItem('language');
    if (theme) {
      setSelectedThemeOption(theme);
    }
    if (language) {
      setSelectedLanguageOption(language);
    }
  }, [])


  const handleThemeChange = (e) => {
    setSelectedThemeOption(e.target.value);
    localStorage.setItem('theme', e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedLanguageOption(e.target.value);
    localStorage.setItem('language', e.target.value);
  };

  return (
    <div className='wrapper'>
      <h2 className='header'>
        Settings
      </h2>
      <div className='outerCard'>
        <div className='innerCard'>
          <div className='cardContainer'>
            <div>
              <p className='text_larger'>Desofy</p>
              <p className='text_smaller'>Change Theme</p>
            </div>
            <div className="select_box_container">
              <DropDown
                options={themeOptions}
                onChange={handleThemeChange}
                selected={selectedThemeOption}
              />
            </div>
          </div>
          <div className='cardContainer'>
            <div className='text_container'>
              <p className='text_larger'>Language </p>
              <p className='text_smaller'>Language of your need</p>{' '}
            </div>
            <div className="select_box_container">
              <DropDown
                options={languageOptions}
                onChange={handleColorChange}
                selected={selectedLanguageOption}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesoCard;