import _ from 'lodash'
import CorespringNg15Element from 'corespring-legacy-component-dependencies/support/corespring-ng15-element'
import 'corespring-legacy-drag-and-drop-inline'

export default class CorespringTextEntryNg15Element extends CorespringNg15Element {
  _legacyHtml(){
    return '<drag-and-drop-inline id="' + this.getAttribute('pie-id') + '"></drag-and-drop-inline>';
  }
}


