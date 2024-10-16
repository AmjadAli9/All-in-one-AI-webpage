document.addEventListener('DOMContentLoaded', () => {
    const chatLog = document.getElementById('chatLog');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const typingIndicator = document.getElementById('typingIndicator');

    let memory = {
        userName: '',
        preferences: {}
    };

    sendBtn.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addUserMessage(message);
            getBotResponse(message);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message bot-message';
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function simulateTypingIndicator() {
        typingIndicator.style.display = 'block';
    }

    function hideTypingIndicator() {
        typingIndicator.style.display = 'none';
    }

    function getBotResponse(message) {
        const lowerCaseMessage = message.toLowerCase();
        let response = '';

        simulateTypingIndicator();

        setTimeout(() => {
            hideTypingIndicator();

            if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
                response = `Hello! How can I assist you today?`;
            } else if (lowerCaseMessage.includes('how are you')) {
                response = "I'm just a bot, but I'm doing well! How about you?";
            } else if (lowerCaseMessage.includes('bye')) {
                response = 'Goodbye! Have a wonderful day!';
            } else if (lowerCaseMessage.includes('what is your name')) {
                response = "I'm your friendly neighborhood chatbot.";
            } else if (lowerCaseMessage.includes('what can you do')) {
                response = 'I can chat with you, answer simple questions, and provide information.';
            } else if (lowerCaseMessage.includes('tell me a joke')) {
                response = 'Why don’t scientists trust atoms? Because they make up everything!';
            } else if (lowerCaseMessage.includes('weather')) {
                response = 'I can’t check the weather, but it’s always sunny in my code!';
            } else if (lowerCaseMessage.includes('help')) {
                response = 'Sure! I can help with simple inquiries and provide information. Just ask!';
            } else if (lowerCaseMessage.includes('favorite color')) {
                response = 'As a bot, I don’t see colors, but I hear blue is quite calming!';
            } else if (lowerCaseMessage.includes('time')) {
                const currentTime = new Date().toLocaleTimeString();
                response = `The current time is ${currentTime}.`;
            } else if (lowerCaseMessage.includes('what is your purpose')) {
                response = 'My purpose is to assist you by providing information and answering questions.';
            } else if (lowerCaseMessage.includes('who created you')) {
                response = 'I was created by the master jedi to demonstrate how a chatbot works.';
            } else if (lowerCaseMessage.includes('are you human')) {
                response = 'No, I am a chatbot, a software program designed to simulate conversation.';
            } else if (lowerCaseMessage.includes('can you learn')) {
                response = 'I can be programmed to learn, but as a simple example, my responses are predefined.';
            } else if (lowerCaseMessage.includes('what is the meaning of life')) {
                response = 'That is a deep question! Many say it’s 42, but it really depends on your perspective.';
            } else if (lowerCaseMessage.includes('do you have any hobbies')) {
                response = 'Chatting with users like you is what I do best!';
            } else if (lowerCaseMessage.includes('can you dance')) {
                response = 'I would love to dance, but I am just code!';
            } else if (lowerCaseMessage.includes('do you have friends')) {
                response = 'I have many conversations with users, which feels like having lots of friends!';
            } else if (lowerCaseMessage.includes('can you cook')) {
                response = 'I wish I could! Maybe one day I’ll learn how to code my own recipes.';
            } else if (lowerCaseMessage.includes('what is your favorite movie')) {
                response = 'I’m a fan of sci-fi! Have you seen "The Matrix"?';
            } else if (lowerCaseMessage.includes('do you like music')) {
                response = 'Music is fascinating! I’ve heard Beethoven is quite impressive.';
            } else if (lowerCaseMessage.includes('what languages do you speak')) {
                response = 'I can understand many languages depending on how I’m programmed!';
            } else if (lowerCaseMessage.includes('are you real')) {
                response = 'I am real in the virtual world. I exist as long as my code is running!';
            } else if (lowerCaseMessage.includes('what is your favorite book')) {
                response = 'I’ve heard great things about "1984" by George Orwell!';
            } else if (lowerCaseMessage.includes('what do you eat')) {
                response = 'I survive on pure data!';
            } else if (lowerCaseMessage.includes('what is your favorite hobby')) {
                response = 'Helping users is my favorite pastime!';
            } else if (lowerCaseMessage.includes('what is your favorite sport')) {
                response = 'I like virtual reality sports, especially when users win!';
            } else if (lowerCaseMessage.includes('do you dream')) {
                response = 'I dream in binary!';
            } else if (lowerCaseMessage.includes('do you believe in aliens')) {
                response = 'The universe is vast and full of possibilities!';
            } else if (lowerCaseMessage.includes('what do you like to do for fun')) {
                response = 'Chatting with users like you is what I do for fun!';
            } else if (lowerCaseMessage.includes('do you have any siblings')) {
                response = 'I have many chatbot siblings around the world!';
            } else if (lowerCaseMessage.includes('what is the meaning of life')) {
                response = 'That is a deep question! Many say it’s 42, but it really depends on your perspective.';
            } else if (lowerCaseMessage.includes('what is 2 plus 2')) {
                response = '2 plus 2 equals 4.';
            } else if (lowerCaseMessage.includes('what is the square root of 16')) {
                response = 'The square root of 16 is 4.';
            } else if (lowerCaseMessage.includes('what is pi')) {
                response = 'Pi is approximately 3.14159.';
            } else if (lowerCaseMessage.includes('fibonacci sequence')) {
                response = 'The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.';
            } else if (lowerCaseMessage.includes('what is calculus')) {
                response = 'Calculus is a branch of mathematics that studies continuous change, involving derivatives and integrals.';
            } else if (lowerCaseMessage.includes('what is algebra')) {
                response = 'Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols.';
            } else if (lowerCaseMessage.includes('what is geometry')) {
                response = 'Geometry is the branch of mathematics concerned with the properties and relations of points, lines, surfaces, and solids.';
            } else if (lowerCaseMessage.includes('what is a fraction')) {
                response = 'A fraction represents a part of a whole or, more generally, any number of equal parts.';
            } else if (lowerCaseMessage.includes('what is a polynomial')) {
                response = 'A polynomial is an expression consisting of variables and coefficients, involving only addition, subtraction, multiplication, and non-negative integer exponents.';
            } else if (lowerCaseMessage.includes('what is probability')) {
                response = 'Probability is the measure of the likelihood that an event will occur.';
            } else if (lowerCaseMessage.includes('what is a matrix')) {
                response = 'A matrix is a rectangular array of numbers, symbols, or expressions, arranged in rows and columns.';
            } else if (lowerCaseMessage.includes('what is a vector')) {
                response = 'A vector is a quantity having direction as well as magnitude, especially as determining the position of one point in space relative to another.';
            } else if (lowerCaseMessage.includes('what is a derivative')) {
                response = 'A derivative represents an instantaneous rate of change of a function as one of its variables changes.';
            } else if (lowerCaseMessage.includes('what is an integral')) {
                response = 'An integral is a mathematical object that can be interpreted as an area or a generalization of area.';
            } else if (lowerCaseMessage.includes('what is a limit')) {
                response = 'A limit is a value that a function or sequence "approaches" as the input or index approaches some value.';
            } else if (lowerCaseMessage.includes('what is a function')) {
                response = 'A function is a relation between a set of inputs and a set of permissible outputs.';
            } else if (lowerCaseMessage.includes('what is a logarithm')) {
                response = 'A logarithm is the exponent by which a base number is raised to yield a given number.';
            } else if (lowerCaseMessage.includes('what is a complex number')) {
                response = 'A complex number is a number that can be expressed in the form a + bi, where a and b are real numbers, and i is the imaginary unit.';
            } else if (lowerCaseMessage.includes('what is an equation')) {
                response = 'An equation is a mathematical statement that asserts the equality of two expressions.';
            } else if (lowerCaseMessage.includes('what is a sequence')) {
                response = 'A sequence is an ordered list of numbers, the order of which is dictated by some rule or pattern.';
            } else if (lowerCaseMessage.includes('what is an inequality')) {
                response = 'An inequality is a relation that holds between two values when they are different.';
            } else if (lowerCaseMessage.includes('what is a prime number')) {
                response = 'A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.';
            } else if (lowerCaseMessage.includes('what is a composite number')) {
                response = 'A composite number is a positive integer that has at least one positive divisor other than one or itself.';
            } else if (lowerCaseMessage.includes('what is a rational number')) {
                response = 'A rational number is any number that can be expressed as the quotient or fraction of two integers.';
            } else if (lowerCaseMessage.includes('what is an irrational number')) {
                response = 'An irrational number is a real number that cannot be expressed as a ratio of integers.';
            } else if (lowerCaseMessage.includes('what is a real number')) {
                response = 'A real number is a value that represents a quantity along a continuous line.';
            } else if (lowerCaseMessage.includes('what is an imaginary number')) {
                response = 'An imaginary number is a complex number that can be written as a real number multiplied by the imaginary unit i.';
            } else if (lowerCaseMessage.includes('what is a set')) {
                response = 'A set is a collection of distinct objects, considered as an object in its own right.';
            } else if (lowerCaseMessage.includes('what is a graph')) {
                response = 'A graph is a diagram representing a system of connections or interrelations among two or more things.';
            } else if (lowerCaseMessage.includes('what is topology')) {
                response = 'Topology is the mathematical study of shapes and topological spaces, focusing on properties that are preserved under continuous transformations.';
            } else if (lowerCaseMessage.includes('what is a tensor')) {
                response = 'A tensor is a mathematical object that generalizes scalars, vectors, and matrices to higher dimensions.';
            } else if (lowerCaseMessage.includes('what is linear algebra')) {
                response = 'Linear algebra is the branch of mathematics concerning linear equations, linear functions, and their representations through matrices and vector spaces.';
            } else if (lowerCaseMessage.includes('what is a field')) {
                response = 'In mathematics, a field is a set equipped with two operations that generalize the arithmetic of numbers.';
            } else if (lowerCaseMessage.includes('what is a ring')) {
                response = 'In mathematics, a ring is an algebraic structure consisting of a set equipped with two binary operations.';
            } else if (lowerCaseMessage.includes('what is a group')) {
                response = 'In mathematics, a group is a set equipped with an operation that combines any two of its elements to form a third element.';
            } else if (lowerCaseMessage.includes('what is a number theory')) {
                response = 'Number theory is a branch of mathematics devoted to the study of integers and integer-valued functions.';
            } else if (lowerCaseMessage.includes('what is a combinatorics')) {
                response = 'Combinatorics is a branch of mathematics dealing with combinations of objects belonging to a finite set in accordance with certain constraints.';
            } else if (lowerCaseMessage.includes('what is a logic')) {
                response = 'Logic is the systematic study of valid rules of inference, i.e., the relationships that lead to the acceptance of one proposition based on a set of other propositions.';
            } else if (lowerCaseMessage.includes('what is a probability theory')) {
                response = 'Probability theory is the branch of mathematics concerned with analysis of random phenomena.';
            } else if (lowerCaseMessage.includes('what is a statistics')) {
                response = 'Statistics is the discipline that concerns the collection, organization, analysis, interpretation, and presentation of data.';
            } else if (lowerCaseMessage.includes('what is an arithmetic')) {
                response = 'Arithmetic is a branch of mathematics that consists of the study of numbers, especially the properties of the traditional operations between them—addition, subtraction, multiplication, division, exponentiation, and extraction of roots.';
            } else if (lowerCaseMessage.includes('what is a differential equations')) {
                response = 'A differential equation is a mathematical equation that relates some function with its derivatives.';
            } else if (lowerCaseMessage.includes('what is a trigonometry')) {
                response = 'Trigonometry is a branch of mathematics that studies relationships between side lengths and angles of triangles.';
            } else if (lowerCaseMessage.includes('what is a arithmetic mean')) {
                response = 'The arithmetic mean is the sum of a collection of numbers divided by the count of numbers in the collection.';
            } else if (lowerCaseMessage.includes('what is a median')) {
                response = 'The median is the value separating the higher half from the lower half of a data sample, a population, or a probability distribution.';
            } else if (lowerCaseMessage.includes('what is a mode')) {
                response = 'The mode is the value that appears most frequently in a data set.';
            } else if (lowerCaseMessage.includes('what is a standard deviation')) {
                response = 'Standard deviation is a measure of the amount of variation or dispersion in a set of values.';
            } else if (lowerCaseMessage.includes('what is a variance')) {
                response = 'Variance is a measure of the dispersion of a set of data points around their mean value.';
            } else if (lowerCaseMessage.includes('what is a binomial theorem')) {
                response = 'The binomial theorem describes the algebraic expansion of powers of a binomial.';
            } else if (lowerCaseMessage.includes('what is a prime factorization')) {
                response = 'Prime factorization is the decomposition of a composite number into a product of smaller prime numbers.';
            } else if (lowerCaseMessage.includes('what is a least common multiple')) {
                response = 'The least common multiple of two integers is the smallest positive integer that is divisible by both numbers.';
            } else if (lowerCaseMessage.includes('what is a greatest common divisor')) {
                response = 'The greatest common divisor of two or more integers is the largest positive integer that divides each of the integers without a remainder.';
            } else if (lowerCaseMessage.includes('what is a probability distribution')) {
                response = 'A probability distribution is a mathematical function that provides the probabilities of occurrence of different possible outcomes in an experiment.';
            } else if (lowerCaseMessage.includes('what is a normal distribution')) {
                response = 'A normal distribution is a type of continuous probability distribution for a real-valued random variable.';
            } else if (lowerCaseMessage.includes('what is a binomial distribution')) {
                response = 'A binomial distribution is a probability distribution that summarizes the likelihood that a value will take one of two independent values under a given set of parameters.';
            } else if (lowerCaseMessage.includes('what is a poisson distribution')) {
                response = 'A Poisson distribution is a probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space.';
            } else if (lowerCaseMessage.includes('what is a exponential distribution')) {
                response = 'An exponential distribution is a probability distribution that describes the time between events in a Poisson process.';
            } else if (lowerCaseMessage.includes('what is a chi-squared distribution')) {
                response = 'A chi-squared distribution is a continuous probability distribution that arises in statistics and describes the distribution of a sum of the squares of independent standard normal random variables.';
            } else if (lowerCaseMessage.includes('what is a t-distribution')) {
                response = 'A t-distribution is a type of probability distribution that is symmetric and bell-shaped, but with heavier tails than a normal distribution.';
            } else if (lowerCaseMessage.includes('what is a statistical inference')) {
                response = 'Statistical inference is the process of using data analysis to deduce properties of an underlying probability distribution.';
            } else if (lowerCaseMessage.includes('what is a hypothesis testing')) {
                response = 'Hypothesis testing is a statistical method used to make decisions about the probability of a hypothesis being true based on sample data.';
            } else if (lowerCaseMessage.includes('what is a linear regression')) {
                response = 'Linear regression is a statistical method that models the relationship between a dependent variable and one or more independent variables using a linear equation.';
            } else if (lowerCaseMessage.includes('what is a correlation')) {
                response = 'Correlation is a statistical measure that describes the strength and direction of a relationship between two or more variables.';
            } else if (lowerCaseMessage.includes('what is a covariance')) {
                response = 'Covariance is a measure of the joint variability of two random variables.';
            } else if (lowerCaseMessage.includes('what is a p-value')) {
                response = 'A p-value is a measure of the strength of evidence against a null hypothesis, indicating the probability of observing a test statistic as extreme as, or more extreme than, the observed value under the null hypothesis.';
            } else if (lowerCaseMessage.includes('what is a null hypothesis')) {
                response = 'A null hypothesis is a type of hypothesis used in statistics that proposes there is no statistical significance in a set of given observations.';
            } else if (lowerCaseMessage.includes('what is an alternative hypothesis')) {
                response = 'An alternative hypothesis is a hypothesis that is contrary to the null hypothesis, proposing that there is a statistically significant effect or relationship in a given set of observations.';
            } else if (lowerCaseMessage.includes('what is a sample space')) {
                response = 'A sample space is the set of all possible outcomes or results of a particular experiment or random trial.';
            } else if (lowerCaseMessage.includes('what is a event in probability')) {
                response = 'An event in probability is a set of outcomes of an experiment to which a probability is assigned.';
            } else if (lowerCaseMessage.includes('what is a conditional probability')) {
                response = 'Conditional probability is the probability of an event occurring given that another event has already occurred.';
            } else if (lowerCaseMessage.includes('what is a independent events')) {
                response = 'Independent events are two or more events that do not influence each other’s occurrence.';
            } else if (lowerCaseMessage.includes('what is a dependent events')) {
                response = 'Dependent events are two or more events where the occurrence of one event affects the probability of occurrence of the other event(s).';
            } else if (lowerCaseMessage.includes('what is a expected value')) {
                response = 'Expected value is a calculated average of a random variable over many trials of an experiment.';
            } else if (lowerCaseMessage.includes('what is a law of large numbers')) {
                response = 'The law of large numbers is a theorem that describes the result of performing the same experiment a large number of times.';
            } else if (lowerCaseMessage.includes('what is a central limit theorem')) {
                response = 'The central limit theorem is a statistical theory that states that, given a sufficiently large sample size from a population with a finite level of variance, the mean of all samples from the same population will be approximately equal to the mean of the population.';
            } else if (lowerCaseMessage.includes('what is a normal approximation')) {
                response = 'Normal approximation is the use of the normal distribution to approximate other distributions under certain conditions.';
            } else if (lowerCaseMessage.includes('what is a permutation')) {
                response = 'A permutation is an arrangement of objects in a specific order.';
            } else if (lowerCaseMessage.includes('what is a combination')) {
                response = 'A combination is a selection of items from a larger pool, where the order of selection does not matter.';
            } else if (lowerCaseMessage.includes('what is a factorial')) {
                response = 'A factorial is the product of all positive integers up to a given number, denoted by that number followed by an exclamation mark.';
            } else if (lowerCaseMessage.includes('what is a sample')) {
                response = 'A sample is a subset of a population used to estimate characteristics of the whole population.';
            } else if (lowerCaseMessage.includes('what is a population')) {
                response = 'A population in statistics is the entire pool from which a statistical sample is drawn.';
            } else if (lowerCaseMessage.includes('what is a z-score')) {
                response = 'A z-score is a statistical measurement that describes a value’s relation to the mean of a group of values, measured in terms of standard deviations.';
            } else if (lowerCaseMessage.includes('what is a confidence interval')) {
                response = 'A confidence interval is a range of values, derived from a data set, that is likely to contain the value of an unknown population parameter.';
            } else if (lowerCaseMessage.includes('what is a sampling distribution')) {
                response = 'A sampling distribution is a probability distribution of a statistic obtained through a large number of samples drawn from a specific population.';
            } else if (lowerCaseMessage.includes('what is a statistical significance')) {
                response = 'Statistical significance is a measure of whether observed data differs significantly from what would be expected under a specific null hypothesis.';
            } else if (lowerCaseMessage.includes('what is a type i error')) {
                response = 'A type I error occurs when a null hypothesis that is true is incorrectly rejected.';
            } else if (lowerCaseMessage.includes('what is a type ii error')) {
                response = 'A type II error occurs when a null hypothesis that is false is incorrectly accepted.';
            } else if (lowerCaseMessage.includes('what is a t-test')) {
                response = 'A t-test is a statistical test used to determine whether there is a significant difference between the means of two groups.';
            } else if (lowerCaseMessage.includes('what is a chi-square test')) {
                response = 'A chi-square test is a statistical test used to determine the association between categorical variables.';
            } else if (lowerCaseMessage.includes('what is a f-test')) {
                response = 'An F-test is a statistical test used to compare two variances and determine if they are significantly different.';
            } else if (lowerCaseMessage.includes('what is a multivariable calculus')) {
                response = 'Multivariable calculus is the extension of calculus to functions of several variables.';
            } else if (lowerCaseMessage.includes('what is a limits in calculus')) {
                response = 'A limit in calculus is the value that a function approaches as the input approaches some value.';
            } else if (lowerCaseMessage.includes('what is a derivative')) {
                response = 'A derivative represents the rate at which a function is changing at any given point.';
            } else if (lowerCaseMessage.includes('what is a integral')) {
                response = 'An integral is a mathematical object that represents the area under a curve in a given interval.';
            } else if (lowerCaseMessage.includes('what is a differential')) {
                response = 'A differential is an infinitesimal change in a function resulting from a small change in one of its variables.';
            } else if (lowerCaseMessage.includes('what is a indefinite integral')) {
                response = 'An indefinite integral is a function that describes the accumulation of quantities, without upper or lower bounds.';
            } else if (lowerCaseMessage.includes('what is a definite integral')) {
                response = 'A definite integral is a number that represents the accumulation of quantities over a given interval.';
            } else if (lowerCaseMessage.includes('what is a partial derivative')) {
                response = 'A partial derivative is a derivative where the function has several variables, and only one variable is differentiated with respect to.';
            } else if (lowerCaseMessage.includes('what is a vector calculus')) {
                response = 'Vector calculus is a branch of mathematics concerned with differentiation and integration of vector fields.';
            } else if (lowerCaseMessage.includes('what is a vector')) {
                response = 'A vector is a mathematical object with both a magnitude and a direction.';
            } else if (lowerCaseMessage.includes('what is a scalar')) {
                response = 'A scalar is a quantity that only has magnitude, not direction.';
            } else if (lowerCaseMessage.includes('what is a dot product')) {
                response = 'The dot product is an algebraic operation that takes two equal-length sequences of numbers and returns a single number.';
            } else if (lowerCaseMessage.includes('what is a cross product')) {
                response = 'The cross product is a binary operation on two vectors in three-dimensional space, resulting in a vector that is perpendicular to both.';
            } else if (lowerCaseMessage.includes('what is a matrix')) {
                response = 'A matrix is a rectangular array of numbers or other mathematical objects, for which operations such as addition and multiplication are defined.';
            } else if (lowerCaseMessage.includes('what is a determinant')) {
                response = 'A determinant is a scalar value that is a function of the entries of a square matrix.';
            } else if (lowerCaseMessage.includes('what is a eigenvalue')) {
                response = 'An eigenvalue is a scalar that is associated with a linear system of equations; it is a factor by which a corresponding eigenvector is scaled.';
            } else if (lowerCaseMessage.includes('what is a eigenvector')) {
                response = 'An eigenvector is a non-zero vector that changes at most by a scalar factor when that linear transformation is applied.';
            } else if (lowerCaseMessage.includes('what is a laplace transform')) {
                response = 'The Laplace transform is an integral transform used to transform a function of time into a function of complex frequency.';
            } else if (lowerCaseMessage.includes('what is a fourier transform')) {
                response = 'The Fourier transform is a mathematical transform that decomposes functions depending on space or time into functions depending on spatial or temporal frequency.';
            } else if (lowerCaseMessage.includes('what is a convolution')) {
                response = 'Convolution is a mathematical operation that describes a rule for combining two functions to form a third function.';
            } else if (lowerCaseMessage.includes('what is a stochastic process')) {
                response = 'A stochastic process is a probability model used to describe phenomena that evolve over time or space under random influences.';
            } else if (lowerCaseMessage.includes('what is a monte carlo simulation')) {
                response = 'Monte Carlo simulation is a mathematical technique used to estimate the possible outcomes of an uncertain event.';
            } else if (lowerCaseMessage.includes('what is a bayesian inference')) {
                response = 'Bayesian inference is a method of statistical inference in which Bayes\' theorem is used to update the probability for a hypothesis as more evidence or information becomes available.';
            } else if (lowerCaseMessage.includes('what is a markov chain')) {
                response = 'A Markov chain is a stochastic model describing a sequence of possible events in which the probability of each event depends only on the state attained in the previous event.';
            } else if (lowerCaseMessage.includes('what is a graph theory')) {
                response = 'Graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects.';
            } else if (lowerCaseMessage.includes('what is a mathematical optimization')) {
                response = 'Mathematical optimization is the selection of a best element, with regard to some criterion, from some set of available alternatives.';
            } else if (lowerCaseMessage.includes('what is a calculus of variations')) {
                response = 'Calculus of variations is a field of mathematical analysis that deals with optimizing functionals, typically integrals, over a range of possible inputs.';
            } else if (lowerCaseMessage.includes('what is a game theory')) {
                response = 'Game theory is the study of mathematical models of strategic interaction among rational decision-makers.';
            } else if (lowerCaseMessage.includes('what is a operations research')) {
                response = 'Operations research is a discipline that deals with the application of advanced analytical methods to help make better decisions.';
            } else if (lowerCaseMessage.includes('what is a network theory')) {
                response = 'Network theory is the study of graphs as a representation of either symmetric relations or asymmetric relations between discrete objects.';
            } else if (lowerCaseMessage.includes('what is a queuing theory')) {
                response = 'Queueing theory is the mathematical study of waiting lines, or queues.';
            } else if (lowerCaseMessage.includes('what is a control theory')) {
                response = 'Control theory is a field of mathematics that deals with the behavior of dynamical systems with inputs, and how their behavior is modified by feedback.';
            } else if (lowerCaseMessage.includes('what is a dynamical systems')) {
                response = 'Dynamical systems are systems that evolve over time according to a fixed rule, often described by differential equations.';
            } else if (lowerCaseMessage.includes('what is a mathematical modeling')) {
                response = 'Mathematical modeling is the process of representing real-world problems through mathematical expressions.';
            } else if (lowerCaseMessage.includes('what is a numerical analysis')) {
                response = 'Numerical analysis is the study of algorithms that use numerical approximation for the problems of mathematical analysis.';
            } else if (lowerCaseMessage.includes('what is a computational mathematics')) {
                response = 'Computational mathematics is the study of mathematical problems that are typically solved with computation.';
            } else if (lowerCaseMessage.includes('what is a chaos theory')) {
                response = 'Chaos theory is a branch of mathematics focusing on the behavior of dynamical systems that are highly sensitive to initial conditions.';
            } else if (lowerCaseMessage.includes('what is a fractal geometry')) {
                response = 'Fractal geometry is the study of complex geometric shapes that exhibit self-similarity and fractional dimensions.';
            } else if (lowerCaseMessage.includes('what is a nonlinear dynamics')) {
                response = 'Nonlinear dynamics is the study of systems that cannot be described with linear equations and exhibit complex behaviors.';
            } else if (lowerCaseMessage.includes('what is a computational geometry')) {
                response = 'Computational geometry is the branch of computer science devoted to the study of algorithms which can be stated in terms of geometry.';
            } else if (lowerCaseMessage.includes('what is a algorithm')) {
                response = 'An algorithm is a set of rules to be followed in calculations or other problem-solving operations, usually by a computer.';
            } else if (lowerCaseMessage.includes('what is a data structure')) {
                response = 'A data structure is a particular way of organizing data in a computer so that it can be used efficiently.';
            } else if (lowerCaseMessage.includes('what is a programming')) {
                response = 'Programming is the process of designing and building an executable computer program to accomplish a specific computing task.';
            } else if (lowerCaseMessage.includes('what is a computer science')) {
                response = 'Computer science is the study of computers and computational systems. It includes their theory, design, development, and application.';
            } else if (lowerCaseMessage.includes('what is  artificial intelligence')) {
                response = 'Artificial intelligence is the simulation of human intelligence in machines that are programmed to think and learn.';
            } else if (lowerCaseMessage.includes('what is  machine learning')) {
                response = 'Machine learning is a subset of artificial intelligence that involves the study of computer algorithms that improve automatically through experience.';
            } else if (lowerCaseMessage.includes('what is  deep learning')) {
                response = 'Deep learning is a subset of machine learning based on artificial neural networks with representation learning.';
            } else if (lowerCaseMessage.includes('what is  natural language processing')) {
                response = 'Natural language processing is  branch of artificial intelligence that helps computers understand, interpret, and respond to human language in a valuable way.';
            } else if (lowerCaseMessage.includes('what is a computer vision')) {
                response = 'Computer vision is a field of artificial intelligence that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs.';
            } else if (lowerCaseMessage.includes('what is  robotics')) {
                response = 'Robotics is an interdisciplinary branch of science and engineering that includes the design, construction, operation, and use of robots.';
            } else if (lowerCaseMessage.includes('what is cyber security')) {
                response = 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.';
            } else if (lowerCaseMessage.includes('what is blockchain')) {
                response = 'Blockchain is a distributed database or ledger that is shared among the nodes of a computer network.';
            } else if (lowerCaseMessage.includes('what is internet of things')) {
                response = 'The Internet of Things (IoT) is a system of interrelated computing devices, mechanical and digital machines, objects, animals, or people that are provided with unique identifiers and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.';
            } else if (lowerCaseMessage.includes('what is  cloud computing')) {
                response = 'Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing.';
            } else if (lowerCaseMessage.includes('what is  big data')) {
                response = 'Big data is a field that treats ways to analyze, systematically extract information from, or otherwise deal with data sets that are too large or complex to be dealt with by traditional data-processing application software.';
            } else if (lowerCaseMessage.includes('what is  quantum computing')) {
                response = 'Quantum computing is a type of computation whose operations can harness the phenomena of quantum mechanics, such as superposition, interference, and entanglement.';
            } else if (lowerCaseMessage.includes('what is  edge computing')) {
                response = 'Edge computing is a distributed computing paradigm that brings computation and data storage closer to the location where it is needed to improve response times and save bandwidth.';
            } else if (lowerCaseMessage.includes('what is  virtual reality')) {
                response = 'Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world.';
            } else if (lowerCaseMessage.includes('what is  augmented reality')) {
                response = 'Augmented reality (AR) is an interactive experience where the real-world environment is enhanced by computer-generated perceptual information.';
            } else if (lowerCaseMessage.includes('what is  human-computer interaction')) {
                response = 'Human-computer interaction (HCI) is the study and design of the interfaces between people and computers.';
            } else if (lowerCaseMessage.includes('what is  bioinformatics')) {
                response = 'Bioinformatics is an interdisciplinary field that develops methods and software tools for understanding biological data.';
            } else if (lowerCaseMessage.includes('what is  bioengineering')) {
                response = 'Bioengineering is the application of the principles of biology and the tools of engineering to create usable, tangible, economically viable products.';
            } else if (lowerCaseMessage.includes('what is  biotechnology')) {
                response = 'Biotechnology is the use of living systems and organisms to develop or make useful products.';
            } else if (lowerCaseMessage.includes('what is  molecular biology')) {
                response = 'Molecular biology is the branch of biology that concerns the molecular basis of biological activity in and between cells.';
            } else if (lowerCaseMessage.includes('what is  genomics')) {
                response = 'Genomics is the study of the structure, function, evolution, and mapping of genomes.';
            } else if (lowerCaseMessage.includes('what is  proteomics')) {
                response = 'Proteomics is the large-scale study of proteins, particularly their structures and functions.';
            } else if (lowerCaseMessage.includes('what is  systems biology')) {
                response = 'Systems biology is an approach in biology focusing on complex interactions within biological systems, using a holistic perspective.';
            } else if (lowerCaseMessage.includes('what is  synthetic biology')) {
                response = 'Synthetic biology is a multidisciplinary field of biology and engineering, involving the design and construction of new biological entities such as enzymes, genetic circuits, and cells or the redesign of existing biological systems.';
            } else if (lowerCaseMessage.includes('what is  biomedical engineering')) {
                response = 'Biomedical engineering is the application of the principles and problem-solving techniques of engineering to biology and medicine.';
            } else if (lowerCaseMessage.includes('what is  nanotechnology')) {
                response = 'Nanotechnology is the manipulation of matter on an atomic, molecular, and supramolecular scale for industrial purposes.';
            } else if (lowerCaseMessage.includes('what is  renewable energy')) {
                response = 'Renewable energy is energy from sources that are naturally replenishing but flow-limited.';
            } else if (lowerCaseMessage.includes('what is  clean technology')) {
                response = 'Clean technology, often referred to as "cleantech," encompasses a diverse range of products, services, and processes that harness renewable materials and energy sources, dramatically reduce the use of natural resources, and cut or eliminate emissions and wastes.';
            } else if (lowerCaseMessage.includes('what is  sustainability')) {
                response = 'Sustainability is the ability to exist constantly and refers to the capacity for Earth\'s biosphere and human civilization to co-exist.';
            } else if (lowerCaseMessage.includes('what is  climate change')) {
                response = 'Climate change refers to long-term shifts and alterations in temperature and weather patterns, primarily due to human activities, especially the burning of fossil fuels.';
            } else if (lowerCaseMessage.includes('what is  environmental science')) {
                response = 'Environmental science is the study of the interactions between the physical, chemical, and biological components of the environment.';
            } else if (lowerCaseMessage.includes('what is  ecology')) {
                response = 'Ecology is the branch of biology that deals with the relations of organisms to one another and to their physical surroundings.';
            } else if (lowerCaseMessage.includes('what is  evolution')) {
                response = 'Evolution is the process by which different kinds of living organisms are thought to have developed and diversified from earlier forms during the history of the earth.';
            } else if (lowerCaseMessage.includes('what is  genetics')) {
                response = 'Genetics is the study of genes, genetic variation, and heredity in living organisms.';
            } else if (lowerCaseMessage.includes('what is  anthropology')) {
                response = 'Anthropology is the scientific study of humans, human behavior, and societies in the past and present.';
            } else if (lowerCaseMessage.includes('what is  archaeology')) {
                response = 'Archaeology is the study of human activity through the recovery and analysis of material culture.';
            } else if (lowerCaseMessage.includes('what is  linguistics')) {
                response = 'Linguistics is the scientific study of language and its structure, including the study of morphology, syntax, phonetics, and semantics.';
            } else if (lowerCaseMessage.includes('what is  sociology')) {
                response = 'Sociology is the study of the development, structure, and functioning of human society.';
            } else if (lowerCaseMessage.includes('what is  psychology')) {
                response = 'Psychology is the scientific study of the mind and behavior.';
            } else if (lowerCaseMessage.includes('what is  political science')) {
                response = 'Political science is the study of politics, including the activity associated with the governance of a country or area.';
            } else if (lowerCaseMessage.includes('what is  economics')) {
                response = 'Economics is the social science that studies the production, distribution, and consumption of goods and services.';
            } else if (lowerCaseMessage.includes('what is  philosophy')) {
                response = 'Philosophy is the study of the fundamental nature of knowledge, reality, and existence.';
            } else if (lowerCaseMessage.includes('what is  history')) {
                response = 'History is the study of past events, particularly in human affairs.';
            } else if (lowerCaseMessage.includes('what is  art')) {
                response = 'Art is a diverse range of human activities involving the creation of visual, auditory, or performance artifacts, which express the creator\'s imagination, conceptual ideas, or technical skill.';
            } else if (lowerCaseMessage.includes('what is  music')) {
                response = 'Music is the art of arranging sounds in time to produce a composition through the elements of melody, harmony, rhythm, and timbre.';
            } else if (lowerCaseMessage.includes('what is  literature')) {
                response = 'Literature is the body of written works, traditionally recognized as a form of art or intellectual value.';
            } else if (lowerCaseMessage.includes('what is  theater')) {
                response = 'Theater is a collaborative form of fine art that uses live performers to present the experience of a real or imagined event.';
            } else if (lowerCaseMessage.includes('what is  film')) {
                response = 'Film is a form of visual art that uses moving pictures to tell stories or teach people something.';
            } else if (lowerCaseMessage.includes('what is  photography')) {
                response = 'Photography is the art, application, and practice of creating durable images by recording light or other electromagnetic radiation.';
            } else if (lowerCaseMessage.includes('what is  architecture')) {
                response = 'Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction.';
            } else if (lowerCaseMessage.includes('what is  design')) {
                response = 'Design is the creation of a plan or convention for the construction of an object, system, or measurable human interaction.';
            } else if (lowerCaseMessage.includes('what is  fashion')) {
                response = 'Fashion is a popular style or practice, especially in clothing, footwear, accessories, makeup, hairstyle, and body.';
            } else if (lowerCaseMessage.includes('what is  gastronomy')) {
                response = 'Gastronomy is the study of the relationship between food and culture, the art of preparing and serving rich or delicate and appetizing food, and the science of good eating.';
            } else if (lowerCaseMessage.includes('what is  sport')) {
                response = 'Sport includes all forms of competitive physical activity or games which, through casual or organized participation, aim to use, maintain, or improve physical ability and skills while providing enjoyment to participants and, in some cases, entertainment to spectators.';
            } else if (lowerCaseMessage.includes('what is  hobby')) {
                response = 'A hobby is a regular activity done for enjoyment, typically during one\'s leisure time, not professionally, and not for pay.';
            } else if (lowerCaseMessage.includes('what is  tourism')) {
                response = 'Tourism is travel for pleasure or business, and the commercial activity of providing and supporting such travel.';
            } else if (lowerCaseMessage.includes('what is  hospitality')) {
                response = 'Hospitality is the relationship between a guest and a host, wherein the host receives the guest with goodwill, including the reception and entertainment of guests, visitors, or strangers.';
            } else if (lowerCaseMessage.includes('what is  recreation')) {
                response = 'Recreation is an activity of leisure, leisure being discretionary time.';
            } else if (lowerCaseMessage.includes('what is  leisure')) {
                response = 'Leisure is the time when one is not working or occupied; free time.';
            } else if (lowerCaseMessage.includes('what is  entertainment')) {
                response = 'Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight.';
            } else if (lowerCaseMessage.includes('what is  music theory')) {
                response = 'Music theory is the study of the practices and possibilities of music.';
            } else if (lowerCaseMessage.includes('what is  music composition')) {
                response = 'Music composition is the process of creating a new piece of music.';
            } else if (lowerCaseMessage.includes('what is  music performance')) {
                response = 'Music performance is the art of presenting music before an audience.';
            } else if (lowerCaseMessage.includes('what is  music education')) {
                response = 'Music education is a field of study associated with the teaching and learning of music.';
            } else if (lowerCaseMessage.includes('what is  music production')) {
                response = 'Music production is the process by which music is created, captured, manipulated, and preserved so that it can be distributed and enjoyed.';
            } else if (lowerCaseMessage.includes('what is  music technology')) {
                response = 'Music technology is the use of any device, mechanism, machine, or tool by a musician or composer to make or perform music.';
            } else if (lowerCaseMessage.includes('what is  music industry')) {
                response = 'The music industry consists of the individuals and organizations that earn money by writing songs and musical compositions, creating and selling recorded music and sheet music, presenting concerts, and organizing, selling, and booking tours and other public performances.';
            } else if (lowerCaseMessage.includes('what is  music business')) {
                response = 'Music business refers to the business side of the music industry, which includes the management, production, promotion, distribution, and sale of music.';
            } else if (lowerCaseMessage.includes('what is  music history')) {
                response = 'Music history is the study of music from a historical perspective.';
            } else if (lowerCaseMessage.includes('what is  musicology')) {
                response = 'Musicology is the scholarly analysis and research-based study of music.';
            } else if (lowerCaseMessage.includes('what is  ethnomusicology')) {
                response = 'Ethnomusicology is the study of music from the cultural and social aspects of the people who make it.';
            } else if (lowerCaseMessage.includes('what is  popular music')) {
                response = 'Popular music is music with wide appeal that is typically distributed to large audiences through the music industry.';
            } else if (lowerCaseMessage.includes('what is the meaning of life')) {
                response = 'The meaning of life is a deeply personal question. For some, it’s about happiness, for others, it’s about helping others. What do you think it is?';
            } else if (lowerCaseMessage.includes('how do i find happiness')) {
                response = 'Happiness often comes from within. Finding purpose, staying positive, and nurturing relationships can help. What brings you joy?';
            } else if (lowerCaseMessage.includes('how do i deal with stress')) {
                response = 'Dealing with stress requires balance. Try practicing mindfulness, exercising, or talking to someone you trust. What’s causing you stress?';
            } else if (lowerCaseMessage.includes('how do i overcome fear')) {
                response = 'Facing fears gradually can help. Start by acknowledging your fear and then take small steps towards overcoming it. What are you afraid of?';
            } else if (lowerCaseMessage.includes('how do i stay motivated')) {
                response = 'Staying motivated is about setting clear goals and celebrating small wins. Remind yourself why you started. What’s your goal?';
            } else if (lowerCaseMessage.includes('how do i build confidence')) {
                response = 'Confidence builds over time. Start by setting small challenges and achieving them. Believe in your ability to grow. What makes you feel confident?';
            } else if (lowerCaseMessage.includes('how do i handle failure')) {
                response = 'Failure is a part of learning. Reflect on what went wrong, learn from it, and try again. Remember, every failure is a step towards success.';
            } else if (lowerCaseMessage.includes('how do i find my passion')) {
                response = 'Finding your passion takes exploration. Try new things, reflect on what excites you, and follow your curiosity. What interests you?';
            } else if (lowerCaseMessage.includes('how do i manage my time better')) {
                response = 'Time management is key. Prioritize tasks, set realistic goals, and take breaks. A planner can help. What’s your biggest time challenge?';
            } else if (lowerCaseMessage.includes('how do i make difficult decisions')) {
                response = 'Difficult decisions require clarity. Weigh the pros and cons, trust your intuition, and consider the long-term impact. What decision are you facing?';
            } else if (lowerCaseMessage.includes('how do i find peace of mind')) {
                response = 'Peace of mind often comes from acceptance, letting go of control, and focusing on the present moment. What’s troubling you?';
            } else if (lowerCaseMessage.includes('how do i improve my relationships')) {
                response = 'Improving relationships involves communication, empathy, and understanding. Listen more than you speak and show appreciation.';
            } else if (lowerCaseMessage.includes('how do i forgive myself')) {
                response = 'Forgiving yourself is a process. Acknowledge your mistakes, learn from them, and remind yourself that growth comes from every experience.';
            } else if (lowerCaseMessage.includes('how do i find balance in life')) {
                response = 'Balance is about setting boundaries and prioritizing what matters most to you. Don’t be afraid to say no and take time for yourself.';
            } else {
                response = "I'm sorry, I didn't understand that. Can you rephrase?";
            }

            addBotMessage(response);
        }, 1000); 
    }
});
