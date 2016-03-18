# Homework

## Things to note

- There will be roughly 2 hours of homework per night. Homework will take more time for some, and less time for others. It is up to you how you want to partition your time for a given exercise.

- Please read the [Incentives](incentives.md) for completing your homework on-time!

- Turn in **something**. Turning in an incomplete assignment is **infinitely** better than turning in nothing at all. We can't get you the help you need unless we see what you're working on. That said...

- If you're feeling overwhelmed, it may be a better investment of your time and energy to take a night off from homework. We respect that! **Just keep in mind the [potential consequences](incentives.md).**

- **Late homework will not be accepted**. If you have issues submitting homework please let us know.

- You can track your homework completion rate in [Garnet](http://garnet.wdidc.org).

## Due Dates and Grading

- You will generally be assigned homework every day. It will **all** be due **Thursday morning at 9:00am**.

- Unless otherwise directed, each assignment should be forked and cloned from a `ga-wdi-exercises` repository, and submitted as a pull request to the original `ga-wdi-exercises` repository from your fork. For more information on pull requests, see below.

- Homework is graded only on **meaningful progress**. That is: that you made an effort to complete it, regardless of whether you were successful. **We would strongly prefer you spend 2 hours taking a good stab at it but not finishing, rather than spending 10 hours getting it perfect.**

- Assignments are graded on whether or not you seem to have made a meaningful effort to do them. There are three possible grades for each assignment:
  - Complete: something was turned in, and meaningful effort was made.
  - Incomplete: something was turned in, but meaningful effort was not made: the submission is blank, or it was blatantly copied wholesale from somewhere.
  - Missing: nothing was turned in.

- **We rely on homework to know where you're at.** It's very much to your advantage to turn in your homework the day it's assigned, even if -- *especially* if -- you're not able to finish it. Then we can address concerns before the unit continues and keep you from falling behind. If you wait until Thursday to turn everything in, you will have missed valuable opportunities to get on-track. We provide this flexibility to account for extenuating circumstances.

- Each week, **one assignment and the lab** will be reviewed and commented upon by your squad instructor.

- The other assignments will be checked only for meaningful progress. These will be checked by **Robin**. In general, feedback will not be given on these assignments by the grading instructor unless you specifically request it.

## What to include with your submission

On **every submission** -- that is, on every pull request (or, sometimes, issue) -- please include:
- **Comfort score**, out of 5
- **Completeness score**, out of 5
- Any comments

### In order to get feedback on your assignment...

...when submitting your pull request or issue, please...

- Ask specific questions, **ending them with a question mark**. We grade *lots* of assignments, and we rely on questions marks to provide a visual queue that we should stop and address something!

  For example:

  > Any thoughts as to why the method on line 49 kept returning 'NaN'?

- If you'd like feedback or an answer to a question from an instructor *other* than the one assigned to check your submission, please include their first name. This will send them an e-mail notification. Without this notification, they will have no way of knowing you asked a question.

  For example:

  > Jesse: On line 85 of `script.js`, is this what you meant by making it an instance method?

## The submission process

All homework assignments will have their own Github repository, under the `ga-wdi-exercises` account.

1. Please **fork** new assignments.
2. Then, **clone** your fork to your computer.
3. Create a feature branch in the format of `yourname_solution`.
4. Complete your work inside it.
5. Then, **push** your completed work to your forked repository.
6. Finally, make a **pull request** to the upstream repository (in `ga-wdi-exercises`).

For example, the sequence of commands you might follow to complete the above process is:

```
# Click grey 'Fork' button on Github
js1989: ~/wdi $ git clone git@github.com:js1989/homeworkaroo.git
js1989: ~/wdi/homeworkaroo $ cd homeworkaroo
js1989: ~/wdi/homeworkaroo (master) $ git checkout -b johnsmith_solution
js1989: ~/wdi/homeworkaroo (johnsmith_solution) $ touch did_my_homework.txt
js1989: ~/wdi/homeworkaroo (johnsmith_solution *) $ git add did_my_homework.txt
js1989: ~/wdi/homeworkaroo (johnsmith_solution +) $ git commit -m "Added did_hw file. All done"
js1989: ~/wdi/homeworkaroo (johnsmith_solution) $ git push origin johnsmith_solution
# Click green 'New pull request' button on Github
# Click green 'Create pull request' button
# Click the new 'Create pull request' button
```

### If `git remote -v` doesn't show anything, or shows the wrong repo

```
js1989: ~/wdi/homeworkaroo (johnsmith_solution) $ git remote remove origin
js1989: ~/wdi/homeworkaroo (johnsmith_solution) $ git remote add origin git@github.com:js1989/homeworkaroo.git
js1989: ~/wdi/homeworkaroo (johnsmith_solution) $ git push origin johnsmith_solution
# Click green 'New pull request' button on Github... (see above)
```

### If you named your branch the wrong thing

Simply rename it with `git branch -m`:

```
js1989: ~/wdi/homeworkaroo (bad-branch-name) $ git branch -m "johnsmith_solution"
js1989: ~/wdi/homeworkaroo (johnsmith_solution) $
```

### If you have a folder inside a folder

For example, you have something like this attempt at making a Github Pages site:

```
js1989.github.io/
  .git/
  js1989.github.io/
    index.html
    style.css
    script.js
```

Remember: wherever the `.git` folder is, Git thinks that's the root folder for your repository. 

So, you might go to `http://js1989.github.io/index.html` and get a 404 error. That's because the `index.html` page is actually at `http://js1989.github.io/js1989.github.io/index.html`. However, that URL won't work either because periods are not allowed in URL paths.

Putting it another way, if you named the folders like this:

```
outer-folder/
  .git/
  inner-folder/
    index.html
    style.css
    script.js
```

...then the URL would be at `http://outer-folder.github.io/innder-folder/index.html`.

**The solution:** Move everything from *inside* `inner-folder` to *outside* `inner-folder`:

```
js1989: ~/wdi $ cd outer-folder
js1989: ~/wdi/outer-folder (johnsmith_solution) $ mv inner-folder/* .
# This says, "Move everything (*) from `inner-folder` to the present directory (.)
js1989: ~/wdi/outer-folder (johnsmith_solution *) $ git add .
js1989: ~/wdi/outer-folder (johnsmith_solution +) $ git commit -m "Put stuff in the right folder"
js1989: ~/wdi/outer-folder (johnsmith_solution) $ git push origin johnsmith_solution
```

### If you have errors...

...please refer to [this readme](https://github.com/ga-wdi-lessons/git-review) for instructions on common Git errors.
