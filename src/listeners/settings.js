const { elid, addListener, removeListener } = require(`../helpers`);

module.exports = _this => {
  _this.elements.settingsShowIndicator.onclick = e => {
    e.preventDefault();
    const checkbox = elid(`${_this.name}-show-indicator-checkbox`);
    if (checkbox.checked) {
      checkbox.checked = false;
      _this.elements.indicator.style.visibility = `hidden`;
      _this.elements.statusButton.style.width = `40px`;
      _this.elements.statusButton.style.height = `25px`;
      _this.elements.statusButton.style.bottom = `0px`;
    } else {
      checkbox.checked = true;
      _this.elements.indicator.style.visibility = `visible`;
      _this.elements.statusButton.style.width = `35px`;
      _this.elements.statusButton.style.height = `20px`;
      _this.elements.statusButton.style.bottom = `5px`;
    }
  };

  _this.elements.settingsShowVolume.onclick = e => {
    e.preventDefault();
    _this.elements.volumeControl.classList.toggle(
      `${_this.name}-volume-width-transition`
    );
    _this.elements.volumeBar.classList.toggle(
      `${_this.name}-volume-width-transition`
    );
    _this.elements.volumeBarHelper.classList.toggle(
      `${_this.name}-volume-width-transition`
    );
    _this.elements.timeDisplay.classList.toggle(
      `${_this.name}-time-width-transition`
    );

    const checkbox = elid(`${_this.name}-show-volume-checkbox`);
    if (checkbox.checked) {
      checkbox.checked = false;
      _this.elements.volumeControl.style.visibility = `hidden`;
      _this.elements.timeDisplay.style.left = `45px`;
    } else {
      checkbox.checked = true;
      _this.elements.volumeControl.style.visibility = `visible`;
      _this.elements.timeDisplay.style.left = ``;
    }
  };

  _this.elements.settingsShowPreview.onclick = e => {
    e.preventDefault();
    const checkbox = elid(`${_this.name}-show-preview-checkbox`);
    if (checkbox.checked) {
      checkbox.checked = false;
      elid(`${_this.name}-hover-display`).style.visibility = `hidden`;
      elid(`${_this.name}-hover-display`).style.display = `none`;
      _this.options.preview = false;
    } else {
      if (!_this.previewClip) {
        _this.createPreviewDisplay();
      }
      checkbox.checked = true;
      elid(`${_this.name}-hover-display`).style.visibility = `visible`;
      elid(`${_this.name}-hover-display`).style.display = `flex`;
      _this.options.preview = true;
    }
  };

  _this.elements.settingsButton.onclick = e => {
    e.preventDefault();

    const showHideSettings = e => {
      if (_this.elements.settingsPanel.contains(e.target)) {
        return true;
      }
      _this.elements.settingsPanel.classList.toggle(`m-fadeOut`);
      _this.elements.settingsPanel.classList.toggle(`m-fadeIn`);
      if (_this.elements.settingsPanel.className.includes(`m-fadeOut`)) {
        removeListener(`click`, showHideSettings, false);
      }
    };

    if (_this.elements.settingsPanel.className.includes(`m-fadeOut`)) {
      addListener(`click`, showHideSettings, false);
    } else {
      removeListener(`click`, showHideSettings, false);
    }
  };
};
