import { Field, Form, Input, Select, SelectProps } from '@westpac/ui';
import { Fragment, useState } from 'react';

const AddressManualComplexPattern = ({ property = 'house' }) => {
  let propertyStr;
  let extraStreetNum = false;

  switch (property) {
    case 'house':
    case 'villa':
      propertyStr = 'Street number';
      break;
    case 'townhouse':
    case 'unit':
      propertyStr = 'Unit number';
      extraStreetNum = true;
      break;
    case 'duplex':
      propertyStr = 'Unit number (if applicable)';
      extraStreetNum = true;
      break;
    case 'land':
      propertyStr = 'Lot number';
      break;
    default:
      break;
  }

  return (
    <Fragment>
      <Form.Group>
        <Field label={propertyStr}>
          <Input size="large" className="w-full sm:w-3/12" />
        </Field>
      </Form.Group>
      {extraStreetNum && (
        <Form.Group>
          <Field label="Street number">
            <Input size="large" className="w-full sm:w-3/12" />
          </Field>
        </Form.Group>
      )}
      <Form.Group>
        <Field label="Street name">
          <Input size="large" className="w-full sm:w-8/12" />
        </Field>
      </Form.Group>
      <Form.Group>
        <Field label="Street type">
          <Select size="large" className="w-full sm:w-5/12">
            <option>Select</option>
            <option>Street</option>
            <option>Road</option>
            <option>Avenue</option>
          </Select>
        </Field>
      </Form.Group>
      <Form.Group>
        <Field label="Suburb">
          <Input size="large" className="w-full sm:w-8/12" autoComplete="address-level2" />
        </Field>
      </Form.Group>
      <Form.Group>
        <Field label="State">
          <Select size="large" className="w-full sm:w-5/12" autoComplete="address-level1">
            <option>Select</option>
            <option>NSW</option>
            <option>VIC</option>
            <option>QLD</option>
            <option>ACT</option>
            <option>SA</option>
            <option>WA</option>
            <option>NT</option>
          </Select>
        </Field>
      </Form.Group>
      <Form.Group>
        <Field label="Postcode">
          <Input size="large" className="w-full sm:w-2/12" autoComplete="postal-code" />
        </Field>
      </Form.Group>
    </Fragment>
  );
};

const PropertySelect = (props: SelectProps) => (
  <Select size="large" {...props}>
    <option value="">Select</option>
    <option value="house">House</option>
    <option value="duplex">Duplex</option>
    <option value="townhouse">Townhouse</option>
    <option value="unit">Unit</option>
    <option value="land">Land</option>
    <option value="villa">Villa</option>
  </Select>
);

export const ComplexAddressDemo = () => {
  const [property, setProperty] = useState<string>();

  return (
    <Form spacing="large">
      <Form.Group>
        <Field label="Property type" hintMessage="Must be a residential address">
          <PropertySelect value={property} onChange={e => setProperty(e.target.value)} />
        </Field>
      </Form.Group>
      {property && <AddressManualComplexPattern property={property} />}
    </Form>
  );
};
