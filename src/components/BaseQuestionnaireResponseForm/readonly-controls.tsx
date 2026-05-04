import {
    GroupItemComponent,
    ItemControlGroupItemComponentMapping,
    ItemControlQuestionItemComponentMapping,
    QuestionItemComponentMapping,
} from 'sdc-qrf';

import { Barcode } from '@beda.software/web-item-controls/controls';
import {
    itemComponents as defaultItemComponents,
    groupComponent as defaultGroupComponent,
    itemControlComponents as defaultItemControlComponents,
    groupControlComponents as defaultGroupControlComponents,
} from '@beda.software/web-item-controls/readonly-controls';

export const itemComponents: QuestionItemComponentMapping = {
    ...defaultItemComponents,
};

export const groupComponent: GroupItemComponent = defaultGroupComponent;

export const itemControlComponents: ItemControlQuestionItemComponentMapping = {
    ...defaultItemControlComponents,
    barcode: Barcode,
};

export const groupControlComponents: ItemControlGroupItemComponentMapping = {
    ...defaultGroupControlComponents,
};
