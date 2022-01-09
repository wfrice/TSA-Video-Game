import { k } from "./../kaboom.js";
import { ButtonSeries } from "./buttonSeries.js";
import { DialogButton } from "./dialogButton.js";

/**
 *
 * @type {number}
 */
export const buttonSpacing = 50;

/**
 *
 */
export class DialogButtonSeries extends ButtonSeries {
  /**
   * Create a dialog-specific ButtonSeries
   * @param {Dialog} dialog
   * @param {...Object} buttonComps objects containing a "text" and "dialog" parameter
   */
  constructor(dialog, ...buttonComps) {
    let buttons = [];
    for (let i = 0; i < buttonComps.length; i++) {
      buttons.push(new DialogButton(dialog, {
        text: buttonComps[i].text,
        x: k.height()/2,
        y: k.width() - buttonSpacing/2 - buttonSpacing * i,
      }, buttonComps[i].dialog));
    }
    super(buttons, 0);
  }
}

/**
 *
 */
export class UncreatedDialogButtonSeries {
  /**
   *
   * @type {Dialog}
   */
  #dialog = null;

  /**
   *
   * @type {Object[]}
   */
  #buttonComps = null;

  /**
   *
   * @param {...Object} buttonComps
   */
  constructor(...buttonComps) {
    this.#buttonComps = buttonComps;
  }

  set dialog(dialog) {
    this.#dialog = dialog;
  }

  /**
   *
   * @returns {DialogButtonSeries}
   */
  create() {
    return new DialogButtonSeries(this.#dialog, ...this.#buttonComps);
  }
}
