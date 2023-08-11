<?php

$Bel_elicit_30_1=$_POST["Bel_elicit_30_1"];
$Bel_elicit_30_2=$_POST["Bel_elicit_30_2"];
$Bel_elicit_30_3=$_POST["Bel_elicit_30_3"];
$Bel_elicit_30_4=$_POST["Bel_elicit_30_4"];
$Bel_elicit_30_5=$_POST["Bel_elicit_30_5"];
$Bel_elicit_30_6=$_POST["Bel_elicit_30_6"];
$Bel_elicit_30_7=$_POST["Bel_elicit_30_7"];
$Bel_elicit_30_8=$_POST["Bel_elicit_30_8"];
$Bel_elicit_30_9=$_POST["Bel_elicit_30_9"];
$Bel_elicit_30_10=$_POST["Bel_elicit_30_10"];
$Bel_elicit_30_11=$_POST["Bel_elicit_30_11"];
$Bel_elicit_30_12=$_POST["Bel_elicit_30_12"];
$Bel_elicit_30_13=$_POST["Bel_elicit_30_13"];
$Bel_elicit_30_14=$_POST["Bel_elicit_30_14"];
$Bel_elicit_30_15=$_POST["Bel_elicit_30_15"];

$Bel_elicit_32l_1=$_POST["Bel_elicit_32l_1"];
$Bel_elicit_32l_2=$_POST["Bel_elicit_32l_2"];
$Bel_elicit_32l_3=$_POST["Bel_elicit_32l_3"];
$Bel_elicit_32l_4=$_POST["Bel_elicit_32l_4"];
$Bel_elicit_32l_5=$_POST["Bel_elicit_32l_5"];
$Bel_elicit_32l_6=$_POST["Bel_elicit_32l_6"];
$Bel_elicit_32l_7=$_POST["Bel_elicit_32l_7"];
$Bel_elicit_32l_8=$_POST["Bel_elicit_32l_8"];
$Bel_elicit_32l_9=$_POST["Bel_elicit_32l_9"];
$Bel_elicit_32l_10=$_POST["Bel_elicit_32l_10"];
$Bel_elicit_32l_11=$_POST["Bel_elicit_32l_11"];
$Bel_elicit_32l_12=$_POST["Bel_elicit_32l_12"];
$Bel_elicit_32l_13=$_POST["Bel_elicit_32l_13"];
$Bel_elicit_32l_14=$_POST["Bel_elicit_32l_14"];
$Bel_elicit_32l_15=$_POST["Bel_elicit_32l_15"];

$Bel_elicit_32m_1=$_POST["Bel_elicit_32m_1"];
$Bel_elicit_32m_2=$_POST["Bel_elicit_32m_2"];
$Bel_elicit_32m_3=$_POST["Bel_elicit_32m_3"];
$Bel_elicit_32m_4=$_POST["Bel_elicit_32m_4"];
$Bel_elicit_32m_5=$_POST["Bel_elicit_32m_5"];
$Bel_elicit_32m_6=$_POST["Bel_elicit_32m_6"];
$Bel_elicit_32m_7=$_POST["Bel_elicit_32m_7"];
$Bel_elicit_32m_8=$_POST["Bel_elicit_32m_8"];
$Bel_elicit_32m_9=$_POST["Bel_elicit_32m_9"];
$Bel_elicit_32m_10=$_POST["Bel_elicit_32m_10"];
$Bel_elicit_32m_11=$_POST["Bel_elicit_32m_11"];
$Bel_elicit_32m_12=$_POST["Bel_elicit_32m_12"];
$Bel_elicit_32m_13=$_POST["Bel_elicit_32m_13"];
$Bel_elicit_32m_14=$_POST["Bel_elicit_32m_14"];
$Bel_elicit_32m_15=$_POST["Bel_elicit_32m_15"];

$host="ec2-3-248-141-201.eu-west-1.compute.amazonaws.com";
$dbname="d43sg2k0mcvm00";
$username="ylnkdtgmqzhkfu";
$password="92ec0a0da420d56bed8ced34c09cddba6eaadfe6f9a4d976fd07474a56d7470c";

$conn = pg_connect("host=$host port=5432 dbname=$dbname user=$username password=$password");

if (!$conn) {
    echo "Failed to connect to PostgreSQL: ".pg_last_error();
   
} else {
    echo "Connected to PostgreSQL successfully!";
}

$sql = "INSERT INTO ttdisbin (Bel_elicit_30_1, Bel_elicit_30_2,
                              Bel_elicit_30_3, Bel_elicit_30_4, Bel_elicit_30_5, Bel_elicit_30_6,
                              Bel_elicit_30_7, Bel_elicit_30_8, Bel_elicit_30_9, Bel_elicit_30_10, Bel_elicit_30_11,
                              Bel_elicit_30_12, Bel_elicit_30_13, Bel_elicit_30_14, Bel_elicit_30_15, Bel_elicit_32l_1, Bel_elicit_32l_2, Bel_elicit_32l_3, Bel_elicit_32l_4,
                              Bel_elicit_32l_5, Bel_elicit_32l_6, Bel_elicit_32l_7, Bel_elicit_32l_8, Bel_elicit_32l_9,
                              Bel_elicit_32l_10, Bel_elicit_32l_11, Bel_elicit_32l_12, Bel_elicit_32l_13, Bel_elicit_32l_14, 
                              Bel_elicit_32l_15, Bel_elicit_32m_1, Bel_elicit_32m_2, Bel_elicit_32m_3, Bel_elicit_32m_4,
                              Bel_elicit_32m_5, Bel_elicit_32m_6, Bel_elicit_32m_7, Bel_elicit_32m_8, Bel_elicit_32m_9,
                              Bel_elicit_32m_10, Bel_elicit_32m_11, Bel_elicit_32m_12, Bel_elicit_32m_13, Bel_elicit_32m_14, 
                              Bel_elicit_32m_15)
        VALUES ($1,	$2,	$3, 	$4, 	$5, 	$6, 	$7, 	$8, 	$9, 	$10,    $11,    $12,    $13,	$14,	$15,    $16,    $17,    $18,    $19,    $20,    $21,    $22,    $23,    $24,
        $25,	$26,	$27,	$28,	$29,	$30,	$31,	$32,    $33,	$34,	$35,	$36,	$37,	$38,	$39,	$40,	$41,	$42,	$43,	$44,	$45)";                      

$stmt = pg_prepare($conn, "insert_stmt", $sql);

$params = array( $Bel_elicit_30_1, $Bel_elicit_30_2, $Bel_elicit_30_3, $Bel_elicit_30_4, $Bel_elicit_30_5, $Bel_elicit_30_6, $Bel_elicit_30_7, $Bel_elicit_30_8, $Bel_elicit_30_9, $Bel_elicit_30_10,
    $Bel_elicit_30_11, $Bel_elicit_30_12, $Bel_elicit_30_13, $Bel_elicit_30_14, $Bel_elicit_30_15, $Bel_elicit_32l_1, $Bel_elicit_32l_2, $Bel_elicit_32l_3, $Bel_elicit_32l_4,
    $Bel_elicit_32l_5, $Bel_elicit_32l_6, $Bel_elicit_32l_7, $Bel_elicit_32l_8, $Bel_elicit_32l_9, $Bel_elicit_32l_10, $Bel_elicit_32l_11, $Bel_elicit_32l_12, $Bel_elicit_32l_13, $Bel_elicit_32l_14,
    $Bel_elicit_32l_15, $Bel_elicit_32m_1, $Bel_elicit_32m_2, $Bel_elicit_32m_3, $Bel_elicit_32m_4, $Bel_elicit_32m_5, $Bel_elicit_32m_6, $Bel_elicit_32m_7, $Bel_elicit_32m_8,
    $Bel_elicit_32m_9, $Bel_elicit_32m_10, $Bel_elicit_32m_11, $Bel_elicit_32m_12, $Bel_elicit_32m_13, $Bel_elicit_32m_14, $Bel_elicit_32m_15);

$result = pg_execute($conn, "insert_stmt", $params);
?>


