import React, { useState } from 'react';
import './App.css';
import Input from '@salesforce/design-system-react/components/input';
import { Tooltip } from '@salesforce/design-system-react';
import Icon from '@salesforce/design-system-react/components/icon';

function App() {
  const [toolTipOpen, setToolTipOpen] = useState(false)
  return (
    <div className='App'>
      <header className='App-header'>
        <section className='slds-row slds-row_pull-padded slds-row_vertical-align-center'>
          <div className='slds-col_padded'>
            <h1 className='slds-text-title_caps slds-p-vertical_medium'>
              Base Input with visible label
            </h1>
            <Input id='base-id' label='My Label' placeholder='My placeholder' />
          </div>
          <div className='slds-col_padded'>
            <h1 className='slds-text-title_caps slds-p-vertical_medium'>
              Base Input with hidden label (assistive text)
            </h1>
            <Input
              assistiveText={{ label: 'My label' }}
              id='assistiveLabel-id'
              placeholder='My placeholder'
            />
          </div>
          <div className='slds-col_padded'>
            <h1 className='slds-text-title_caps slds-p-vertical_medium'>
              Base Input with Fixed Text
            </h1>
            <Input
              id='fixed-text-id'
              fixedTextLeft='$'
              label='Total amount'
              placeholder='Enter amount in USD'
            />
          </div>
          <div className='slds-col_padded'>
            <h1 className='slds-text-title_caps slds-p-vertical_medium'>Help line text</h1>

            <Input
              id='field-level-help'
              label='My Label'
              fieldLevelHelpTooltip={
                <Tooltip
                  id='field-level-help-tooltip'
                  align='top left'
                  content='Some helpful information'
                />
              }
            />
          </div>
          <div className='slds-grid slds-grid_pull-padded slds-grid_vertical-align-center'>
            <div className='slds-col_padded'>
              <Icon
                assistiveText={{ label: 'Account' }}
                category='standard'
                name='account'
                size='small'
              />
            </div>
            <div className='slds-col_padded'>
              <Icon
                assistiveText={{ label: 'Announcement' }}
                category='utility'
                name='announcement'
                size='small'
              />
            </div>
            <div className='slds-col_padded'>
              <Icon
                assistiveText={{ label: 'Description' }}
                category='action'
                name='description'
                size='small'
              />
            </div>
            <div className='slds-col_padded'>
              <Icon assistiveText={{ label: 'XML' }} category='doctype' name='xml' size='small' />
            </div>
            <div className='slds-col_padded'>
              <Icon
                assistiveText={{ label: 'custom5' }}
                category='custom'
                name='custom5'
                size='small'
              />
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
