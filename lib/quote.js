'use strict';

/**
 * Yeah this works ;)
 *
 * @param o
 *
 * @returns a shuffled o.
 */
function shuffle(o) {

    // Make Doug Crockford's eyes "pop".
    for(
        var j, x,
            i = o.length;

        i;

        j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
        )
        ;

    return o;
}

var quotes = shuffle([
    'This will be a day long remembered. It has seen the end of Kenobi, and will soon see the end of the rebellion.',
    'What a piece of junk!',
    'Don’t call me a mindless philosopher, you overweight glob of grease.',
    'I’m Luke Skywalker, I’m here to rescue you.',
    'Watch your mouth kid, or you’ll find yourself floating home.',
    'Evacuate in our moment of triumph? I think you overestimate their chances.',
    'If this is a consular ship, where is the ambassador?',
    'Commander, tear this ship apart until you’ve found those plans. And bring me the passengers, I want them alive!',
    'Look, good against remotes is one thing, good against the living, that’s something else.',
    'Aren’t you a little short for a stormtrooper?',
    'What are we going to do? We’ll be sent to the spice mines of Kessel and smashed into who knows what.',
    'That’s no moon, it’s a space station.',
    'This is some rescue. You came in here and you didn’t have a plan for getting out?',
    'He’s the brains, sweetheart!',
    'You just watch yourself. We’re wanted men. I have the death sentence on 12 systems.',
    'I’ll be careful.',
    'You’ll be dead!',
    'Mos Eisley spaceport. You will never find a more wretched hive of scum and villainy.',
    'Into the garbage chute, flyboy!',
    'This is Red 5, I’m going in.',
    'Boring conversation anyway. Luke, we’re gonna have company!',
    'The Force is strong with this one.',
    'I suggest a new strategy, R2. Let the wookiee win.',
    'I’m a member of the Imperial Senate on a diplomatic mission to Alderaan.',
    'You are part of the Rebel Alliance and a traitor. Take her away!',
    'You’re all clear, kid! Now let’s blow this thing and go home!',
    'These blast points — too accurate for sandpeople. Only imperial stormtroopers are so precise.',
    'I’ve got a very bad feeling about this.',
    'You’ve never heard of the Millennium Falcon? … It’s the ship that made the Kessel run in less than 12 parsecs.',
    'When I left you, I was but the learner, now I am the master.',
    'Only a master of evil, Darth.',
    'I find your lack of faith disturbing.',
    'Use the Force, Luke.',
    'You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.',
    'Help me Obi-Wan Kenobi. You’re my only hope.',
    'May the Force be with you.'
]);

exports.provide = function(number, callback) {
    if (!number) {
        throw new Error('What part of "positive Integer" don\'t you understand?!');
    }

    if (typeof callback !== 'function') {
        throw new Error('Can you pass me the salt... *ahem* "continuation" please?');
    }

    if (Math.random() < 0.5) {
        throw new Error('Your request is bad, and you should feel bad!');
    }

    var i, len, result = [];

    for (i = 0, len = Math.min(quotes.length, number); i < len; i++) {
        result.push(quotes[i]);
    }

    shuffle(quotes);

    setTimeout(function() {
       callback(null, result);
    }, Math.floor(Math.random()*2000));
};

//   npm install o2.then