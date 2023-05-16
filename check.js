Entities:

Gymnasium
Member
Session
Coach

Attributes:

Gymnasium: gymnasium ID (unique identifier), name, address, phone number
Member: member ID (unique identifier), last name, first name, address, date of birth, gender, gymnasium ID
Session: session ID (unique identifier), type of sport, schedule, max capacity (20 members), gymnasium ID
Coach: coach ID (unique identifier), last name, first name, age, specialty, gymnasium ID

Relationships:

A gymnasium has many members (1-to-many)
A member belongs to one gymnasium (many-to-1)
A gymnasium has many sessions (1-to-many)
A session takes place in one gymnasium (many-to-1)
A session has many members (many-to-many)
A session has up to two coaches (many-to-2)
A coach can work in many sessions (1-to-many)
A coach works in one gymnasium (many-to-1)

The ER diagram would look like this:

  +------------+             +------------+
  | Gymnasium  |             | Member     |
  +------------+             +------------+
  | gymnasiumID|<------1-to-*>| memberID   |
  | name       |             | lastName  |
  | address    |             | firstName |
  | phone      |             | address   |
  +------------+             | dob       |
                             | gender    |
                             | gymnasiumID|<------many-to-1
                             +------------+

           +------------+                   +------------+
           | Session    |                   | Coach      |
           +------------+                   +------------+
           | sessionID  |<-------------1-to-*| coachID   |
           | type       |                   | lastName  |
           | schedule   |                   | firstName |
           | capacity   |                   | age       |
           | gymnasiumID|<------1-to-many----| specialty |
           +------------+                   +------------+
                ^     ^                                 ^
                |     |                                 |
                |     +---------------------------------+
                |
                +-----------------------------------------+
                                                            |
                                                            v
                                                      +------------+
                                                      |SessionCoach|
                                                      +------------+
                                                      |sessionID   |
                                                      |coachID1    |
                                                      |coachID2    |
                                                      +------------+ 