INSERT INTO public.questions(
	id, created_at, updated_at, description, title)
	VALUES (nextval('question_sequence'), NOW(), NOW(), 'Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue. Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.', 'Sort Colors');

INSERT INTO public.questions(
	id, created_at, updated_at, description, title)
	VALUES (nextval('question_sequence'), NOW(), NOW(), 'Given an integer, write a function to determine if it is a power of two.', 'Power of Two');

INSERT INTO public.questions(
	id, created_at, updated_at, description, title)
	VALUES (nextval('question_sequence'), NOW(), NOW(), 'Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.', 'Queue Reconstruction by Height');

INSERT INTO public.questions(
	id, created_at, updated_at, description, title)
	VALUES (nextval('question_sequence'), NOW(), NOW(), 'Write a function that takes a string as input and reverse only the vowels of a string.', 'Reverse Vowels of a String');

INSERT INTO public.questions(
	id, created_at, updated_at, description, title)
	VALUES (nextval('question_sequence'), NOW(), NOW(), 'Write a function that reverses a string. The input string is given as an array of characters char[]. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. You may assume all the characters consist of printable ascii characters.', 'Reverse String');

INSERT INTO public.labels(
	id, created_at, updated_at, name)
	VALUES (nextval('label_sequence'), NOW(), NOW(), 'Dynamic Programming');

INSERT INTO public.labels(
	id, created_at, updated_at, name)
	VALUES (nextval('label_sequence'), NOW(), NOW(), 'Greedy');


INSERT INTO public.labels(
	id, created_at, updated_at, name)
	VALUES (nextval('label_sequence'), NOW(), NOW(), 'Binary Search');


INSERT INTO public.labels(
	id, created_at, updated_at, name)
	VALUES (nextval('label_sequence'), NOW(), NOW(), 'Divide and Conquer');