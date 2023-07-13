# hiring-samson-ogundigie-flashcards

## DB Schema
User table
| column      | type              | description                                                                        |
|-------------|-------------------|------------------------------------------------------------------------------------|
| user_id     | serial/primaryKey |                                                                                    |
| username    | text              | The unique id name for each user. It is randomly generated on new account creation |
| provider    | text              | Name of the third party login system used by a user                                |
| provider_id | text              | Identifier of the user logging in with 3rd party sign in                           |

Card table

| column              | type               | description                                                                                                                    |
|---------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------|
| card_id             | serial/primaryKey  |                                                                                                                                |
| user_id             | integer/foreignKey | User who the flash card belongs to.                                                                                            |
| word                | text/uniqueKey     | Flash card word. A user cannot create duplicate words. Has a unique key constraint shared with the user_id.                    |
| definition          | text/uniqueKey     | Definition of the word.                                                                                                        |
| bin_id      | smallInt/foreignKey           | The bin number the word is currently in. Default 1.                                                          |
| bin_word_date_added | timestamp          | Time the word was placed in the bin. Will be used against current timestamp to measure the next time  the card should appear.  |
| word_wrong_count    | smallInt           | Tracks the number of times the user got the answer wrong.                                                                      |

Bins table ( a simple table to help manage and query cards in bins)
| column              | type              | description                                                                                                                    |
|---------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------------|
| bin_id              | serial/primaryKey |                                                                                                                                |
| bin_level           | integer           | The bin number that cards move into. Range 0-11   
