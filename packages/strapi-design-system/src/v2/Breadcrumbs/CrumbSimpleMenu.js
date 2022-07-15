import PropTypes from 'prop-types';
import React from 'react';

import { SimpleMenu } from '../SimpleMenu';

import CarretDown from '@strapi/icons/CarretDown';

export const CrumbSimpleMenu = ({ children, ...props }) => (
  <SimpleMenu noBorder icon={<CarretDown />} size="S" {...props}>
    {children}
  </SimpleMenu>
);

CrumbSimpleMenu.displayName = 'CrumbSimpleMenu';

CrumbSimpleMenu.propTypes = {
  children: PropTypes.shape({ type: PropTypes.oneOf([SimpleMenu]) }),
};
