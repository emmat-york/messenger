export type ButtonType = 'submit' | 'button' | 'reset';

type ButtonMetaDataType =
  | 'regular'
  | 'medium'
  | 'large'
  | 'text'
  | 'publicLink';

interface RegularMetaData {
  variant: 'regular';
  type: Extract<ButtonMetaDataType, 'regular' | 'medium' | 'large' | 'text'>;
}

interface LineMetaData {
  variant: 'line';
  type: Extract<ButtonMetaDataType, 'regular' | 'large'>;
}

interface CommerceMetaData {
  variant: 'commerce';
  type: Extract<ButtonMetaDataType, 'regular' | 'large'>;
}

interface PublicLinkMetaData {
  variant: 'publicLink';
  type: Extract<ButtonMetaDataType, 'publicLink'>;
}

export type ButtonMetaData =
  | RegularMetaData
  | LineMetaData
  | CommerceMetaData
  | PublicLinkMetaData;
