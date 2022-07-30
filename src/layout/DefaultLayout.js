import React from 'react';

const DefaultLayout = (ViewComponent) => {
    return class extends React.Component {
        render() {
            return (
                <div class="formCell">
                    <ViewComponent />
                </div>
            )
        }
    }
};

export default DefaultLayout;