// @flow
import { type Editor } from 'slate';

import { getCurrentCode } from '../utils';
import type Options from '../options';

/**
 * User is Cmd+A to select all text
 */
function onSelectAll(
    opts: Options,
    event: *,
    editor: Editor,
    next: *
): void | Editor {
    const { value } = editor;
    event.preventDefault();

    const currentCode = getCurrentCode(opts, value);
    return editor
        .moveToStartOfNode(currentCode.getFirstText())
        .moveFocusToEndOfNode(currentCode.getLastText());
}

export default onSelectAll;
