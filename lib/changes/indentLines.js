// @flow
import { type Editor } from 'slate-react';

import type Options from '../options';

/**
 * Indent all lines in selection
 */
function indentLines(
    opts: Options,
    editor: Editor,
    // Indent to add
    indent: string
): Editor {
    const { value } = editor;
    const { document, selection } = value;
    const lines = document
        .getLeafBlocksAtRange(selection)
        .filter(node => node.type === opts.lineType);

    return lines.reduce((editor, line) => {
        // Insert an indent at start of line
        const text = line.nodes.first();
        return editor.insertTextByKey(text.key, 0, indent);
    }, editor);
}

export default indentLines;
