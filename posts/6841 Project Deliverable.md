---
title: Project report on Quantum computing
date: today
category: uni
excerpt: Ever wondered how quantum computers work? Here's an explanation so simple you can show your younger siblings.
---


# Introduction
A few months ago I read about Google's new quantum chip Willow, said to have completed a calculation that would have taken a supercomputer 10 septillion years. This was possible because of their new achievement of reducing errors exponentially with increasing scale of qubits which was, historically, the biggest hurdle of quantum computer development. Now, this might seem irrelevant to cybersecurity but if you think about it for a second, what use is a computer that can do calculations that seemingly take forever in under five minutes?  Well it can crack just about any form of modern encryption. This means that the development of the quantum supercomputer threatens literally the security of every piece of information currently stored online (provided you get access to that information). 

![[Pasted image 20250729165906.png|400]]
*Fig 1: Willow's computation ability compared to other supercomputers. Source: in appendix.* 

What makes the problem of quantum computers interesting is that unlike other cybersecurity threats, we can predict or know what they are capable of and know they are an <u>upcoming</u> threat, we just don't fully have the means to protect ourselves yet, it is an after thought for most firms who don't see their completion for another few decades, but some black hats and nation sponsored teams are performing collect now harvest later practices, hoping to collect encrypted information now to later use quantum computers to break.
# Problem Statement
Sufficiently powerful quantum computers threaten modern cryptography standards that underpin global digital security.
# Background
## Overview
While governments are attempting to create countermeasures in advance, for 90% of firms currently operating, its not worth it to invest resources into quantum encryption now. Since there does not exist a computer yet that can decrypt everything, what's the point of diverting profits? Well, it gives rise to a stranger form of attacks, collect now, harvest later. These attacks are typically done by state sponsored attackers to perform basic breaches to information knowing they cannot decrypt it, traditionally this would not be worth much, however, if the nation was able to develop a quantum computer before the rest of the world, then, all that previously useless information would become completely open. 

I like to explain this using a house metaphor, suppose everyone keeps their secrets and cash in a locked combination safe in their house, then lets put ourselves in the shoes of robbers (attacker's mindset).  Assuming we are sufficiently prepared attackers, there isn't really any house that we cannot break into, with enough planning, patience and determination there is always a way into any house. Either the door is left unlocked mistakenly, the glass windows can be broken, a ladder can be climbed onto the second floor or into rooms, we can pose as plumbers or we can ram a car into the backdoor. However, without a way to open those safes, its simply not viable for us to target those houses unless we devote a significant amount of resources (like cutting through the lock) that might end up wasted if there isn't anything valuable inside the safe anyway. Now, again as the thieves, what if we were developing a tool that could open any safe? We would break into as many houses as possible and simply steal the entire safe! Before it is known that we developed such a tool and countermeasures are made, we would already have all the safes indefinitely. I hope this gives us a better idea of the current situation.

So lets dive into a quick summary on what current cryptography practices are, a bit of technical knowledge, and some steps that governments are taking to future proof information security now. 
## Current Encryption Standards
The backbone to modern encryption standards hinge on the difficulty of factoring large numbers. The principle comes from nondeterministic polynomial-time (NP) problems, these problems have a property such that once a potential solution is provided, its correctness can be verified quickly, however, finding the solution itself is computationally difficult ([P vs NP Problems - GeeksforGeeks](https://www.geeksforgeeks.org/dsa/p-vs-np-problems/)). We use this in cryptography to make "trapdoor functions", these are mathematical operations that are easy to perform in one direction but incredibly hard in the reverse direction, for example, any computer can multiply any two prime numbers together, but going in the reverse direction to find out which were the original prime factors (pretty much brute forcing) is extremely taxing. 

A common encryption method is the RSA algorithm (asymmetric cryptography), which generates two secret very, very large prime numbers $p$ and $q$. The product of these numbers $n=p\cdot q$ is calculated and kept as a **public** key. So when a message needs to be encrypted, anyone can use the recipient's public key to scramble the message. To decrypt the message only the recipient uses a **private** key to decrypt the message, the private key works because it is derived using the original prime numbers $p$ and $q$. So the security comes from the fact that no one can figure out the private key from the public key. 
### Example
Now that sounds complicated but lets code a simple example ourselves in python. 
```python
def find_factors(n):
    if n <= 0:
        return []
    factors = []
    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            factors.append(i)
            if i != n // i:
                factors.append(n // i)
    return sorted(factors)
```
*Fig 2: Python Factorisation Example (whole code in appendix)*

This is a simple function to find the factors of any number (given there are no optimisations but conceptually it is the same as high level programs to find factors) you can try running it yourself with test numbers and you'll see that once you pass a certain number of digits your computer will take longer and eventually just take forever. 
## Why Quantum Computers Threaten RSA Encryption
As we probably know, the small details of how quantum computers work is far beyond the scope of this report, but I will try to explain it conceptually. Modern computers are slower because at the most fundamental level they use bits, we can think of them as light switches since they only have two states, 0 or 1 like on or off. Imagine my secret encryption key is 42 (easter egg) or in **binary** `101010`. That is, given 6 switches, it is in the pattern of on - off - on - off - on - off. But to find this secret pattern, the computer has to try every combination of those six switches until it gets it correct. E.g. `111111`, then `111110` and so on. 

Quantum computers operate slightly differently, rather than bits they have **qubits**, these are bits that can be on, off or **both**. That is, they can be a `0` a `1` or a superposition of both at the same time. This means that in the 6 switch secret pattern above, it can find the secret pattern in one try because it can try all possibilities at the same time in parallel. In summary, a classical computer has to try factoring solutions one by one, so when numbers get very large even though each try is fast it adds up exponentially. On the other hand, quantum computers process all possible factors at once known as quantum parallelism which makes it orders of magnitude faster (https://physics.berkeley.edu/news-events/news/from-bits-to-qubits).
## Existing Work
The NIST Post-Quantum Cryptography (PQC) Standardisation Project is a global effort to futureproof the world's data security against quantum computers. For general encryption they plan to replace RSA with CRYSTALS-Kyber ([Kyber](https://pq-crystals.org/kyber/)). At a conceptual level Kyber, like RSA, has a private and public key however the **key** difference (haha..) instead of using integer factorisation to make keys, we create equations their answers as keys. The answers are private keys and the equations are distorted by adding mathematical noise to be public keys. This mathematical noise creates an NP problem again that is difficult for even quantum computers to break. 

While Kyber is better in pretty much all ways to RSA, the only downside is its keys and ciphertexts are larger than those in RSA, while still tiny, this could make a difference to devices with tiny bandwidth or storage. In my opinion though, for devices that small such as RFID tags, you're probably safe anyway.
# Threat Example
With all that out of the way, lets now put ourselves in the shoes of an attacker once again. You are tasked with attacking an unsuspecting firm that could contain data you could later sell under the table or analyse for your own needs, once you add the finishing touches to your quantum computer. At first you might think of cash, targeting outdated bank systems to get credentials or even the token to a crypto vault containing millions of dollars locked behind a poor soul's forgotten password? Both valid and unethical. But what could be even more unethical? How about targeting a DNA heritage analysis company. Storing millions of people's genetic information works because DNA doesn't change, banks could move money out or freeze transactions before you finish your quantum computer. Crypto vaults can track the flow of money and catch you, but DNA doesn't change, once you have the data its only a matter of time before you crack the encryption and sell the data to a shady insurance company looking to lower costs based on genetic patterns. Another more obvious target would be government secrets. 
# Ethical Concerns
While quantum computers will bring about major improvements in medicine, materials science, finance and more, clearly, there are very unethical uses in security as well. In the next few decades as they advance, it is up to us to stay informed and to keep modernising systems. This brings me back to one of the most fundamental skills in cybersecurity: keep your devices updated!

On a more serious note, the above example is a stark reminder of the responsibility on firms that handle sensitive data to take the utmost precautions against leaks, and to collaborate with law enforcement and the public should data get leaked.
# Conclusion
While PQC algorithms are secure against quantum attacks, changing legacy systems will take both time and resources and it is up to governments and firms (and now you!) to prepare adequately, but for the mean time we can probably rest assured that your neighbour won't be using a DIY quantum computer to read your traffic. I hope that this read has taught you conceptually about some of the changes in cybersecurity that advancement in quantum computers will bring, along with some general information about attacking mindsets and asymmetric cryptography.
# Appendix
1. [Meet Willow, our state-of-the-art quantum chip](https://blog.google/technology/research/google-willow-quantum-chip/)
2. 
```python
def find_factors(n):

    if n <= 0:

        return []

    factors = []

    for i in range(1, int(n**0.5) + 1):

        if n % i == 0:

            factors.append(i)

            if i != n // i:

                factors.append(n // i)

    return sorted(factors)

  

if __name__ == "__main__":

    # Test with various numbers

    test_numbers = [10000000000000]

    for num in test_numbers:

        factors = find_factors(num)

        print(f"Factors of {num}: {factors}")
```
# Report Reflection
I hope this report gives everyone a quick dive into the world of cryptography and its modern challenges. It was particularly difficult to explain these terms such that a child could understand them but I hope that is what I was able to do here. 