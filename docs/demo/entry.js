
    if(!customElements){
      throw new Error('Custom Elements arent supported');
    }
    //
    
        import Controller from 'pie-controller';
        window.pie = window.pie || {};
        window.pie.Controller = Controller;
import PiePlayer from 'pie-player';
customElements.define('pie-player', PiePlayer);
import PieControlPanel from 'pie-control-panel';
customElements.define('pie-control-panel', PieControlPanel);
import CorespringDragAndDropInlineNg15 from 'corespring-drag-and-drop-inline-ng15';
customElements.define('corespring-drag-and-drop-inline-ng15', CorespringDragAndDropInlineNg15);
    