import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// it('Should render the add form when editing', () => {
//     const wrapper = shallow(<AddForm />);
//     wrapper.instance().setEditing(true);
//     expect(wrapper.hasClass('add-form')).toEqual(true);
// });

// it('Should switch to editing when the add button is clicked', () => {
//     const wrapper = shallow(form);
//     wrapper.simulate('submit');
//     expect(wrapper.state.numberOfGuesses).toEqual(number);
// });
//
// describe('<App />', () => {
//     it('Renders without crashing', () => {
//         shallow(<GuessList guesses={[]} />);
//     });
//
//     it('Renders a list of guesses', () => {
//         const values = [10, 24, 52];
//         const wrapper = shallow(<GuessList guesses={values} />);
//         const items = wrapper.find('li');
//         expect(items.length).toEqual(values.length);
//         values.forEach((value, index) => {
//             expect(items.at(index).text()).toEqual(value.toString());
//         });
//     });
// });
