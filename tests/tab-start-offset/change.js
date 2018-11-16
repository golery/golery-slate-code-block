import simulateKey from '../simulate-key';

export default function(plugin, editor) {
    const { value } = editor;
    const block = value.document.findDescendant(
        node => node.type == 'code_block'
    );

    editor.moveToStartOfNode(block).moveTo(0);

    return plugin.onKeyDown(simulateKey('tab'), editor, () => {});
}
