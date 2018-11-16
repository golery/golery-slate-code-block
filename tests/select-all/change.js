import simulateKey from '../simulate-key';

export default function(plugin, editor) {
    return plugin.onKeyDown(simulateKey('mod+a'), editor, () => {});
}
