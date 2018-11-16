import Slate from 'slate';
import { Editor } from 'slate-react';

export default function(plugin, editor) {
    return editor.normalize();
}
