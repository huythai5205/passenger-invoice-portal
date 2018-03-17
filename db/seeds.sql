USE passengerInvoicePortal_db;

-- User story 1 - a group of 10 gets 1 free for 10 group credit 
-- the credit can be kept by the group leader, or split evenly for all 10
INSERT INTO Groups (group_name, tour_name, tour_code, departure_date, pax_in_group)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "5/20/2018", 10);

INSERT INTO Groups (group_name, tour_name, tour_code, departure_date, pax_in_group)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 16);

INSERT INTO Groups (group_name, tour_name, tour_code, departure_date, pax_in_group)
VALUES ("Western Travel", "The Greek Marathon", "EGM", "7/13/2018", 20);

INSERT INTO Groups (group_name, tour_name, tour_code, departure_date, pax_in_group)
VALUES ("Ooh La La group", "Splendors of the French Riviera", "EFR", "8/24/2018", 8);

INSERT INTO Groups (group_name, tour_name, tour_code, departure_date, pax_in_group)
VALUES ("James and Jim's Adventures", "Tanzania", "ATZ", "9/08/2018", 12);

-- Wine Lovers group of 10 passengers, 1 for 10 group credit
-- Burgundy and Provence cruise: Base price 3000


-- Pax 1
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", 101234, "JONES,SUSAN MRS", 550, 4000, "4/21/2018", 3000, true, true, true, "1 for 10", 300);

-- Pax 2
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", 101234, "JONES,MICHAEL MR", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 3
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", 101234, "JONES,WILMAJEAN MRS", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 4
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", 101234, "JONES,JACKSON MRS", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 5
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", 101234, "PUMPHREY,LAURA MRS", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 6
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice,pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", 101234, "PUMPHREY,MICHAEL MR", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 7
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", 101234, "WILLOCK,ABRAHAM MR", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 8
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", 101234, "WILLOCK,JUDY MRS", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 9
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", 101234, "DEBOUDOIR,BABETTE MRS", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- Pax 10
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Wine Lovers", "Burgundy and Provence Cruise", "CLJ", "6/21/2018", 101234, "DEBOUDOIR,GILES MR", 550, 4000, "4/21/2018", 3000, false, true, true, "1 for 10", 300);

-- END OF WINE LOVERS GROUP


-- Geezer Golfers Group of 16 passengers, 1 for 16 group credit w/ 1/2 at 8
-- 2500 base price, 1200 flight, 300 EXTRA NIGHT, etc

-- Pax 1 Group Leader Macilroy
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954036, "MACILROY,EDWARD MR", 550, 4000, "4/21/2018", 2500, true, true, false, "1 for 16", 2500);
-- Pax 2 Macilroy fam
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954036, "MACILROY,JUDY MRS", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);
-- Pax 3 Macilroy fam
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954036, "MACILROY,JAMES MR", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);
-- Pax 4 Macilroy fam
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954036, "MACILROYJR,EDWARD MR", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);

-- Pax 5 Edwardson fam
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954038, "EDWARDSON,ROY MR", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);
-- Pax 6 Edwardson fam
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954038, "EDWARDSON,TINA MRS", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);
-- Pax 7 Edwardson fam
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954038, "EDWARDSON,LISA MR", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);
-- Pax 8 Edwardson fam
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954038, "WALTROUS,MIKE MR", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);

-- Pax 9 MCLINTOCK
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954040, "MCLINTOCK,RUSSEL MR", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);
-- Pax 10 MCLINTOCK
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954040, "MCLINTOCK,JOANIE MRS", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);
-- Pax 11 MCLINTOCK 
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954040, "MCLINTOCK,CAROL MRS", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);
-- Pax 12 MCLINTOCK 
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954040, "MCLINTOCK,ENGLISH MR", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);

-- Pax 13 BERTANERNIE fam
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954051, "BERTANERNIE,SANDRA MRS", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);
-- Pax 14 BERTANERNIE fam
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954051, "BERTANERNIE,JAMES MR", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);
-- Pax 15 BERTANERNIE fam
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954051, "BERTANERNIE,DONNA MRS", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);
-- Pax 16 BERTANERNIE fam
INSERT INTO Passengers(group_name, tour_name, tour_code, departure_date, invoice, pax_name, payments, balance, due_date, total_group_credit, isGroupLeader, hasGroupCredit, group_credit_shared, group_credit_split, group_credit_amt)
VALUES ("Geezer Golfers Group", "Ireland and Scotland", "EIS", "6/12/2018", 954051, "BERTANERNIE,BIGBIRD MR", 550, 4000, "4/21/2018", 2500, false, false, false, "1 for 16", 0);




