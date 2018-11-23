// @flow
import { type Editor } from 'slate-react';

import type Options from '../options';
import { isInCodeBlock } from '../utils';

import wrapCodeBlock from './wrapCodeBlock';
import unwrapCodeBlock from './unwrapCodeBlock';

/**
 * Toggle code block / paragraph.
 */
function toggleCodeBlock(
    opts: Options,
    editor: Editor,
    // When toggling a code block off, type to convert to
    type: string
): Editor {
    if (isInCodeBlock(opts, editor.value)) {
        return unwrapCodeBlock(opts, editor, type);
    }
    return wrapCodeBlock(opts, editor);
}

export default toggleCodeBlock;
