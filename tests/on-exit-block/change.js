import simulateKey from '../simulate-key';

export default function(plugin, change) {
    return plugin.onKeyDown(simulateKey('mod+enter'), change, {});
}
