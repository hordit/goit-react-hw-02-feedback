import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyles";

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
}
export class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    this.setState({ ...INITIAL_STATE });
  }

  handLeOnFeedback = (value) => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback ? Math.round((this.state.good / totalFeedback) * 100) : 0;
  };
  Ï
  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <Layout>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onFeedback={this.handLeOnFeedback} />
        </Section>
        {total > 0 ? (
          <Section title="Statistics">
            <Statistics {...this.state} total={total} positiveFeedback={positiveFeedback} />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Layout>
    );
  }
};
