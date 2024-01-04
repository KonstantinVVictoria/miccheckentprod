import styles from "./styles.module.css";
import { LogoProps } from "./types";

export default function Logo(props: LogoProps) {
  const ratio = 88.269058 / 150.80977;
  return (
    <svg
      width={`${props.size}rem`}
      height={`${props.size * ratio}rem`}
      viewBox="0 0 150.80977 88.269058"
      version="1.1"
      id="svg5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="layer1" transform="translate(-34.328843,-181.88111)">
        <path
          fill="var(--main-font-color)"
          strokeWidth="0.264583"
          d="m 149.95176,268.50169 c 0,-1.7187 -0.27748,-2.32028 -1.07024,-2.32028 -0.81057,0 -1.31101,0.89169 -1.31101,2.33594 0,1.28845 -0.0392,1.36823 -0.67139,1.36823 h -0.67139 l 0.0761,-2.4474 c 0.0718,-2.30985 0.10953,-2.45214 0.67139,-2.53194 0.40798,-0.0579 0.59531,0.0508 0.59531,0.34573 0,0.3918 0.0526,0.39344 0.58804,0.0184 0.81507,-0.5709 1.95503,-0.51464 2.59789,0.12822 0.46657,0.46658 0.52961,0.81776 0.46302,2.57969 -0.0713,1.88638 -0.12179,2.04594 -0.67239,2.12414 -0.5639,0.0801 -0.59531,-0.004 -0.59531,-1.60073 z m 3.175,0.76124 c 0,-0.48797 -0.0765,-1.61907 -0.16999,-2.51354 -0.1698,-1.62461 -0.16925,-1.62631 0.52917,-1.62631 0.45294,0 0.69915,0.14339 0.69915,0.40718 0,0.32622 0.11513,0.29992 0.57906,-0.13229 0.67463,-0.62852 2.1192,-0.71704 2.58293,-0.15828 0.27285,0.32877 0.43198,0.3107 1.15688,-0.1313 1.92481,-1.17365 2.92358,-0.4234 3.18531,2.39271 0.0988,1.06294 0.1474,1.95997 0.10803,1.99339 -0.0394,0.0334 -0.32948,0.13994 -0.64468,0.23671 -0.53571,0.16446 -0.58514,0.0635 -0.75763,-1.54715 -0.2195,-2.04963 -0.61616,-2.52601 -1.57836,-1.89554 -0.58496,0.38327 -0.66279,0.61996 -0.66279,2.01567 0,1.48205 -0.0389,1.5814 -0.61974,1.5814 -0.56493,0 -0.64099,-0.15782 -0.8599,-1.78417 -0.18908,-1.40476 -0.3428,-1.80355 -0.72286,-1.87528 -0.94569,-0.17848 -1.50167,0.70178 -1.50167,2.37754 0,1.4732 -0.0313,1.54649 -0.66145,1.54649 -0.57406,0 -0.66146,-0.11724 -0.66146,-0.88723 z m -10.27711,-1.95704 c 0.0973,-1.27331 0.18723,-2.4044 0.1999,-2.51354 0.0127,-0.10914 0.33688,-0.19844 0.72046,-0.19844 0.67747,0 0.69261,0.0351 0.52917,1.22756 -0.0925,0.67515 -0.16826,1.80625 -0.16826,2.51354 0,1.22713 -0.0334,1.28599 -0.72907,1.28599 h -0.72907 z m -5.33331,1.6635 c -1.16364,-0.39285 -2.02183,-1.81103 -1.75039,-2.89255 0.30168,-1.20197 1.38855,-2.01209 2.69945,-2.01209 0.62501,0 1.20305,0.10788 1.28455,0.23974 0.0815,0.13186 0.35641,0.18984 0.61093,0.12885 1.06503,-0.25522 1.1449,0.54409 0.43247,4.32776 -0.11045,0.58661 -1.16034,0.89179 -1.16034,0.33728 0,-0.15664 -0.23394,-0.17125 -0.59531,-0.0372 -0.36011,0.13358 -0.96119,0.0973 -1.52136,-0.0918 z m 1.79917,-1.51798 c 0.17462,-0.17462 0.3175,-0.56753 0.3175,-0.87312 0,-1.21044 -1.68813,-1.67301 -2.33361,-0.63943 -0.70575,1.13009 1.0679,2.46076 2.01611,1.51255 z m 25.53092,1.59511 c -1.11766,-0.30083 -1.66551,-1.13604 -1.66551,-2.53913 0,-1.53305 0.86883,-2.44264 2.33315,-2.44264 0.76472,0 1.21608,0.18179 1.73182,0.69753 0.38364,0.38365 0.69754,0.8351 0.69754,1.00322 0,0.16812 -0.68461,0.6521 -1.52136,1.07551 -1.25856,0.63686 -1.41601,0.78699 -0.91148,0.86918 0.33544,0.0546 0.76385,-0.0284 0.95203,-0.18461 0.25235,-0.20944 0.4586,-0.15529 0.78586,0.20633 0.36109,0.399 0.37927,0.54378 0.0976,0.77751 -0.66888,0.55512 -1.64973,0.76587 -2.49969,0.5371 z m 0.59903,-3.26976 c 0.49736,-0.39186 0.49334,-0.40232 -0.12714,-0.33073 -0.35241,0.0407 -0.68975,0.22275 -0.74966,0.40465 -0.14821,0.45006 0.25489,0.41607 0.8768,-0.0739 z m 4.75071,2.19059 c -0.16247,-0.48025 -0.71468,-3.41427 -0.75941,-4.0349 -0.0261,-0.36213 0.14978,-0.55585 0.55719,-0.61371 0.3436,-0.0488 0.59531,0.0546 0.59531,0.24456 0,0.19151 0.25603,0.0886 0.61236,-0.24618 0.71343,-0.67023 2.32737,-0.78069 2.81537,-0.1927 0.31982,0.38536 1.04325,3.05666 1.06076,3.91689 0.006,0.31097 -0.19268,0.46302 -0.60603,0.46302 -0.53791,0 -0.66345,-0.20832 -0.99651,-1.65365 -0.424,-1.83996 -1.05447,-2.25726 -1.93701,-1.28207 -0.4113,0.45448 -0.44247,0.728 -0.22609,1.98393 0.20385,1.18321 0.18032,1.48388 -0.12528,1.60115 -0.58748,0.22544 -0.86927,0.17243 -0.99066,-0.18634 z m -38.49919,-0.13229 c 8e-4,-0.10914 0.10799,-0.61516 0.23817,-1.12448 0.57968,-2.26788 0.57825,-2.64583 -0.01,-2.64583 -0.39361,0 -0.50501,-0.11947 -0.39026,-0.41852 0.0883,-0.23018 0.1606,-0.52784 0.1606,-0.66146 0,-0.13361 0.2301,-0.24294 0.51133,-0.24294 0.51526,0 0.62892,-0.21477 0.94515,-1.78594 0.13981,-0.69468 0.30015,-0.85989 0.83452,-0.85989 0.59264,0 0.64551,0.0826 0.50815,0.79375 -0.0843,0.43656 -0.22231,1.15093 -0.30663,1.5875 -0.12724,0.65873 -0.0672,0.79375 0.35278,0.79375 0.67161,0 0.82869,0.19054 0.66694,0.80907 -0.0852,0.32596 -0.36311,0.51384 -0.75993,0.51384 -0.46983,0 -0.66275,0.18114 -0.77492,0.72761 -0.47788,2.3279 -0.66575,2.71198 -1.32655,2.71198 -0.35796,0 -0.65018,-0.0893 -0.64937,-0.19844 z m -4.67173,-1.05867 c -0.2238,-0.14553 -0.15462,-0.81244 0.26069,-2.51321 0.44962,-1.84128 0.66258,-2.3151 1.04054,-2.3151 0.26137,0 0.5403,0.1696 0.61985,0.37689 0.10275,0.26777 0.40676,0.33435 1.05003,0.22997 0.6656,-0.10802 0.90432,-0.0502 0.90135,0.21842 -0.007,0.60878 -0.41225,1.05351 -0.81845,0.89763 -0.65523,-0.25143 -1.33703,0.50492 -1.68229,1.86625 -0.32119,1.26646 -0.74333,1.6478 -1.37172,1.23915 z m 50.17859,-0.48811 c 0,-0.23226 -0.18521,-1.05942 -0.41159,-1.83813 -0.31418,-1.08072 -0.50837,-1.3787 -0.82045,-1.25894 -0.41621,0.15971 -0.87324,-0.31385 -0.88057,-0.9124 -0.002,-0.1819 0.22838,-0.33073 0.51246,-0.33073 0.49332,0 0.49939,-0.0564 0.13515,-1.25677 -0.51707,-1.70401 -0.48916,-1.91823 0.24993,-1.91823 0.54377,0 0.6872,0.19584 0.97994,1.33807 0.30433,1.18742 0.40932,1.32141 0.9325,1.1901 0.44264,-0.1111 0.63406,-0.008 0.76816,0.41475 0.16231,0.51139 -0.0563,0.83751 -0.72891,1.08767 -0.10419,0.0388 0.012,0.8207 0.25824,1.73766 0.39252,1.46184 0.39956,1.69764 0.0571,1.91418 -0.59422,0.37577 -1.052,0.303 -1.052,-0.16723 z m -55.38885,-0.93568 c -0.70228,-0.40823 -1.25494,-1.90066 -1.06168,-2.86699 0.36681,-1.83402 3.18275,-2.59435 4.30841,-1.16331 0.3016,0.38343 0.54837,1.03827 0.54837,1.45521 0,0.75662 -0.003,0.75807 -1.71979,0.75807 -1.74845,0 -2.31636,0.38837 -0.99219,0.67852 1.27657,0.27972 1.38906,0.35266 1.38906,0.90068 0,0.44611 -0.16863,0.5361 -0.99218,0.52942 -0.54571,-0.004 -1.21171,-0.13565 -1.48,-0.2916 z m 1.87687,-3.32232 c -0.25466,-0.0666 -0.67138,-0.0666 -0.92604,0 -0.25466,0.0665 -0.0463,0.121 0.46302,0.121 0.50932,0 0.71768,-0.0545 0.46302,-0.121 z m -6.60296,1.55181 c -0.41639,-0.16494 -0.40297,-0.31733 0.17322,-1.96571 0.54372,-1.55549 0.57296,-1.81581 0.22577,-2.0101 -0.59144,-0.33099 -0.30981,-1.24247 0.36233,-1.17266 0.43307,0.045 0.66944,-0.22318 1.09113,-1.23788 0.44915,-1.08079 0.62967,-1.27142 1.08998,-1.15104 0.65042,0.17009 0.69822,0.72135 0.15317,1.76644 -0.4986,0.95602 -0.50362,1.49111 -0.014,1.49111 0.50547,0 0.71767,0.38008 0.51177,0.91666 -0.10739,0.27984 -0.40499,0.40645 -0.83352,0.3546 -0.59411,-0.0719 -0.73048,0.0906 -1.25569,1.49574 -0.61771,1.65264 -0.76846,1.80427 -1.50418,1.51284 z m 26.15796,-0.16481 c -0.25416,-0.66234 0.10633,-1.23992 0.7193,-1.15246 0.40132,0.0573 0.56164,0.26894 0.56164,0.74159 0,0.77092 -1.01753,1.09729 -1.28094,0.41087 z m -29.59272,-1.21661 c -0.41021,-0.23927 -0.39208,-0.37952 0.22268,-1.72233 0.77387,-1.69035 0.67933,-2.23443 -0.38825,-2.23443 -0.85983,0 -1.44877,0.55568 -1.82278,1.71979 -0.19039,0.59264 -0.41702,0.79375 -0.89441,0.79375 -0.83735,0 -0.78007,-0.54792 0.29808,-2.85188 0.82341,-1.75959 1.49882,-2.26308 1.74957,-1.30421 0.0944,0.36092 0.32758,0.45035 0.9767,0.37457 1.14133,-0.13325 2.11765,0.65251 2.09958,1.68977 -0.0145,0.83363 -1.26373,3.81662 -1.59282,3.8035 -0.11098,-0.004 -0.40273,-0.12526 -0.64835,-0.26853 z m -8.54926,-4.11602 c -1.16416,-0.66073 -2.22865,-1.31079 -2.36552,-1.44458 -0.15467,-0.15118 -0.0465,-0.61971 0.28589,-1.23793 1.8843,-3.50496 3.422,-6.27069 3.69153,-6.63963 0.13257,-0.18147 4.86832,2.4802 4.86537,2.73453 -0.002,0.14552 -0.10458,0.42474 -0.22864,0.62049 -0.17878,0.28209 -0.61948,0.15205 -2.12498,-0.62705 -1.04468,-0.54062 -1.93825,-0.9389 -1.9857,-0.88507 -0.37445,0.4248 -0.93697,1.88495 -0.80712,2.09505 0.089,0.14402 0.74872,0.55925 1.46602,0.92273 0.88168,0.44679 1.30419,0.82581 1.30419,1.16998 0,0.85326 -0.44344,0.85782 -1.92832,0.0198 -0.78197,-0.44131 -1.53388,-0.80238 -1.67092,-0.80238 -0.13705,0 -0.48088,0.43025 -0.76408,0.95612 l -0.5149,0.95613 0.56174,0.43294 c 0.30896,0.23811 1.17167,0.76213 1.91714,1.16448 1.1998,0.64756 1.32314,0.79185 1.07432,1.25677 -0.1546,0.28888 -0.3662,0.52157 -0.47022,0.5171 -0.10402,-0.004 -1.14163,-0.54874 -2.3058,-1.20947 z m 62.97084,-5.90641 c -5.42531,-0.77982 -9.96006,-4.48157 -11.95204,-9.75655 -0.56509,-1.4964 -0.67367,-2.24662 -0.69697,-4.81528 -0.0196,-2.16198 0.0994,-3.44631 0.41105,-4.43708 1.5591,-4.95625 5.72574,-9.01952 10.64657,-10.38247 2.07431,-0.57452 6.03231,-0.45389 8.21896,0.2505 4.82802,1.55527 8.80351,5.68419 10.07904,10.46801 0.53079,1.99071 0.45652,6.28068 -0.14285,8.2515 -1.38509,4.55434 -5.61513,8.73196 -10.08147,9.95654 -1.8323,0.50237 -4.76036,0.71234 -6.48229,0.46483 z m -75.604689,-0.38806 c -0.32394,-0.2459 -0.463021,-0.72022 -0.463021,-1.57908 0,-1.40248 -0.261303,-1.53473 -1.007724,-0.51006 -0.44985,0.61754 -0.58198,0.66834 -0.94811,0.36448 -0.233979,-0.19419 -0.425416,-0.44893 -0.425416,-0.56609 0,-0.30929 5.28528,-7.66044 5.504188,-7.65563 0.938115,0.0206 0.995775,1.0226 0.115181,2.00152 -0.252997,0.28124 -0.9823,1.26711 -1.620673,2.19082 l -1.16068,1.67947 1.425263,-0.0937 c 1.309873,-0.0861 1.432107,-0.0455 1.50981,0.50165 0.0758,0.53369 -0.02691,0.59531 -0.992187,0.59531 h -1.076735 v 1.71979 c 0,1.79093 -0.09152,1.93476 -0.859896,1.35148 z M 124.4915,229.73506 c -0.0745,-19.46824 -0.1057,-20.6423 -0.58183,-21.89427 -1.91892,-5.04582 -5.22768,-7.27604 -10.79473,-7.27604 -3.88629,0 -6.50076,1.18183 -8.29211,3.74833 -2.23274,3.19888 -2.23149,3.18662 -2.23149,21.81248 0,9.52882 -0.0983,16.21382 -0.23718,16.128 -0.13045,-0.0806 -0.50066,-0.6532 -0.82269,-1.27239 -0.32203,-0.61919 -0.66211,-1.18533 -0.75575,-1.25809 -0.0936,-0.0728 -0.51762,-0.64422 -0.942192,-1.26992 -1.962388,-2.89196 -5.479312,-5.73434 -9.191355,-7.42847 -2.914751,-1.33025 -5.033026,-1.96412 -9.812809,-2.93636 l -1.521354,-0.30945 v -8.76106 c 0,-7.39823 -0.06926,-9.01071 -0.445223,-10.36593 -1.060106,-3.82129 -3.468989,-6.52629 -6.811806,-7.64916 -1.762387,-0.59199 -6.198267,-0.59501 -7.975526,-0.005 -2.809214,0.93192 -4.991852,3.29142 -6.106446,6.60125 -0.366376,1.08797 -0.456631,2.89005 -0.552127,11.02401 -0.08812,7.50567 -0.189082,9.72344 -0.442648,9.72344 -0.180668,0 -1.629087,0.13139 -3.218709,0.29199 -6.885081,0.69559 -11.754752,-1.18938 -16.979287,-6.57239 l -2.447396,-2.52164 v -17.9563 -17.95628 h 11.509375 11.509376 v 3.43959 c 0,1.89177 0.07617,3.43958 0.16927,3.43958 0.0931,0 0.301455,-0.15829 0.46302,-0.35176 0.462156,-0.55341 3.331544,-2.89759 4.834279,-3.94942 1.882238,-1.31746 5.933025,-3.20467 8.159473,-3.80139 2.740871,-0.7346 9.691513,-0.6753 12.865883,0.10977 7.07286,1.74922 11.871659,4.81217 14.923246,9.52515 l 0.992574,1.53296 2.807882,-2.78943 c 4.732,-4.70089 8.51105,-7.01045 13.76008,-8.40944 2.68688,-0.71612 9.70233,-0.64409 12.73789,0.13079 9.08731,2.31969 14.91075,7.08773 17.31854,14.17987 1.31088,3.86115 1.28059,3.22246 1.38506,29.21092 l 0.0981,24.40781 H 136.21656 124.57023 Z M 87.083617,248.4596 c -0.894173,-0.36128 -1.69019,-1.57394 -1.69019,-2.57485 0,-2.11572 2.748314,-3.25431 4.408418,-1.82635 0.632,0.54363 0.684594,0.69039 0.379233,1.05833 -0.443884,0.53485 -0.745244,0.53864 -1.267939,0.0159 -1.127562,-1.12756 -2.87727,0.5437 -1.80717,1.72614 0.267374,0.29545 0.691925,0.53718 0.94344,0.53718 0.443865,0 0.875901,0.87784 0.578435,1.17531 -0.205219,0.20521 -0.880819,0.15635 -1.544227,-0.1117 z m -6.182892,-2.46178 c -2.185358,-1.10574 -1.34243,-4.95182 1.085268,-4.95182 0.438012,0 1.025453,0.12259 1.305422,0.27242 0.602835,0.32263 1.308262,1.59531 1.308262,2.36027 0,0.49106 -0.1625,0.54231 -1.719792,0.54231 -0.945886,0 -1.719792,0.11104 -1.719792,0.24675 0,0.3375 0.891641,0.59435 1.394032,0.40157 0.271467,-0.10417 0.472662,0.0392 0.594754,0.42391 0.312192,0.98363 -0.928291,1.37241 -2.248154,0.70459 z m 1.97916,-3.36432 c -0.08994,-0.14552 -0.447125,-0.26459 -0.79375,-0.26459 -0.346626,0 -0.703813,0.11907 -0.79375,0.26459 -0.0975,0.15776 0.222943,0.26458 0.79375,0.26458 0.570807,0 0.891254,-0.10682 0.79375,-0.26458 z m -17.006592,1.8207 c -1.504034,-0.74448 -2.440284,-2.31984 -2.440284,-4.10609 0,-2.49383 2.132241,-4.59952 4.647597,-4.58973 1.323899,0.005 1.807745,0.30556 1.59117,0.98793 -0.143489,0.45209 -0.336785,0.50984 -1.331354,0.39774 -2.692498,-0.30348 -4.503748,2.7242 -2.981241,4.98344 1.01358,1.50405 2.692369,1.9813 4.20088,1.19424 0.508471,-0.26529 0.783119,-0.28681 0.992188,-0.0777 0.500978,0.50097 0.318307,0.90285 -0.610788,1.34373 -1.230765,0.58404 -2.717081,0.53526 -4.068168,-0.13352 z m 10.660653,-1.106 c 0.146159,-1.36481 0.10065,-1.73113 -0.251359,-2.02327 -0.331439,-0.27507 -0.577782,-0.28932 -1.076156,-0.0623 -0.637924,0.29066 -0.73778,0.52781 -1.057624,2.51172 -0.136851,0.84887 -0.254506,0.99554 -0.742847,0.92604 -0.652603,-0.0929 -0.645083,0.39447 -0.09311,-6.03569 0.297963,-3.4711 0.32458,-3.57442 0.943348,-3.66186 l 0.636733,-0.09 -0.162645,2.66966 c -0.08945,1.46832 -0.125859,2.66967 -0.0809,2.66967 0.04496,0 0.446773,-0.12726 0.892924,-0.28278 0.640498,-0.22328 0.982839,-0.19402 1.626981,0.13908 0.7571,0.39151 0.8158,0.52371 0.8158,1.83721 0,2.34805 -0.230251,3.06899 -0.980173,3.06899 -0.639691,0 -0.646766,-0.025 -0.470974,-1.66655 z m -32.180224,-2.21766 c -0.06221,-0.46057 0.05678,-1.6103 0.344347,-3.32715 0.164657,-0.98307 0.233345,-1.85343 0.152638,-1.93414 -0.08071,-0.0807 -0.548907,0.24737 -1.040446,0.72907 -0.491538,0.48169 -1.32525,1.27408 -1.852693,1.76087 l -0.958986,0.88507 -1.278911,-2.34028 -1.278911,-2.34028 -0.320243,1.5875 c -0.176134,0.87313 -0.395313,2.16023 -0.487065,2.86024 -0.14631,1.11625 -0.23773,1.26264 -0.743528,1.19063 -0.476492,-0.0678 -0.569749,-0.24304 -0.536665,-1.00816 0.05169,-1.19552 0.579024,-4.97846 0.977272,-7.01069 l 0.310945,-1.58673 1.298373,2.24819 c 0.714105,1.2365 1.546977,2.68004 1.850826,3.20786 l 0.552452,0.95967 2.64442,-2.52312 c 1.788983,-1.70692 2.670532,-2.38922 2.725142,-2.1092 0.0444,0.22766 -0.116049,1.70512 -0.356547,3.28325 -0.240498,1.57812 -0.514948,3.46463 -0.609888,4.19223 -0.144466,1.10716 -0.269711,1.33671 -0.767932,1.40747 -0.327422,0.0465 -0.608492,-0.013 -0.6246,-0.1323 z m 3.826592,-1.20902 c 0.09177,-0.76399 0.167881,-1.89508 0.169146,-2.51354 0.0021,-1.02245 0.06232,-1.12448 0.663758,-1.12448 0.659137,0 0.661458,0.009 0.661458,2.51354 v 2.51354 h -0.830604 -0.830604 z m 4.744538,1.20352 c -0.77601,-0.1502 -1.927259,-1.54553 -1.927259,-2.33585 0,-1.71843 1.552281,-2.98469 3.264982,-2.66338 0.990621,0.18584 1.242449,0.65916 0.623853,1.17255 -0.189474,0.15725 -0.583258,0.22347 -0.875078,0.14716 -0.796713,-0.20835 -1.804252,0.70967 -1.574241,1.43437 0.249282,0.78542 1.022511,1.16456 1.784331,0.87492 0.609836,-0.23186 1.274069,0.1461 1.274069,0.72497 0,0.23311 -1.473329,0.87458 -1.825418,0.79477 -0.08743,-0.0198 -0.422783,-0.0871 -0.745239,-0.14951 z m -4.56088,-6.01745 c -0.480303,-0.57873 -0.137898,-1.25997 0.581917,-1.15776 0.436285,0.062 0.596495,0.26139 0.596495,0.74254 0,0.77198 -0.682686,1.01253 -1.178412,0.41522 z M 174.29343,216.17516 c 0,-0.14552 0.006,-0.35388 0.0122,-0.46302 0.007,-0.10914 0.31067,-0.15932 0.67547,-0.11152 1.42081,0.18619 1.93667,-1.13188 0.63525,-1.62311 -0.9006,-0.33994 -1.06774,-0.97735 -0.25628,-0.97735 0.61657,0 0.98713,-0.69789 0.5844,-1.10063 -0.18536,-0.18535 -0.45861,-0.17107 -0.86253,0.0451 -0.47203,0.25263 -0.63679,0.24423 -0.81722,-0.0416 -0.50697,-0.80318 1.88102,-1.44262 2.62163,-0.702 0.399,0.399 0.41111,1.33513 0.0223,1.72395 -0.21721,0.21721 -0.18227,0.45644 0.13229,0.90554 0.58119,0.82976 0.53944,1.19845 -0.22194,1.95982 -0.66052,0.66053 -2.52556,0.94473 -2.52556,0.38485 z m -16.66876,-0.89786 c 0,-0.21608 0.47625,-0.94313 1.05834,-1.61568 0.58208,-0.67254 1.05833,-1.3276 1.05833,-1.45568 0,-0.4867 -0.5773,-0.55802 -1.20226,-0.14852 -0.62976,0.41263 -0.64982,0.40554 -0.64982,-0.22979 0,-0.54531 0.16302,-0.68615 0.96923,-0.8374 1.90524,-0.35743 2.41791,0.74327 1.15695,2.48397 l -0.80658,1.11346 h 1.07939 c 0.88523,0 1.06351,0.0833 0.99111,0.46302 -0.12117,0.63552 -3.65469,0.85463 -3.65469,0.22662 z m 6.06366,-0.12488 c -0.5008,-0.40553 -0.60585,-0.73803 -0.58887,-1.86381 0.0259,-1.71712 0.57403,-2.40675 1.90841,-2.40106 1.09975,0.005 1.41746,0.17252 1.83761,0.97074 1.22213,2.32185 -1.21611,4.86588 -3.15715,3.29413 z m 2.35125,-1.80452 c 0.0651,-0.89521 -0.0237,-1.16323 -0.46302,-1.39837 -0.89958,-0.48144 -1.60189,0.0799 -1.60189,1.28043 0,1.23108 0.15699,1.40442 1.18112,1.3041 0.73896,-0.0724 0.80971,-0.16734 0.88379,-1.18616 z m 2.96218,1.86466 c 0,-0.23838 0.47625,-0.9501 1.05833,-1.58159 0.58209,-0.63148 1.05834,-1.26285 1.05834,-1.40303 0,-0.50048 -0.56266,-0.58961 -1.17777,-0.18657 -0.57062,0.37388 -0.64032,0.3707 -0.79652,-0.0364 -0.37348,-0.97329 1.77832,-1.54427 2.62583,-0.69676 0.50825,0.50825 0.34579,1.20589 -0.56343,2.41952 l -0.64421,0.85989 h 0.89541 c 1.02292,0 1.27174,0.15993 1.06936,0.68733 -0.1016,0.26475 -0.6268,0.37101 -1.83386,0.37101 -1.39056,0 -1.69148,-0.0771 -1.69148,-0.43344 z m -10.84792,-9.7404 v -3.05533 h 1.71979 c 1.35232,0 1.71979,0.0848 1.71979,0.39687 0,0.29399 -0.30868,0.39688 -1.19062,0.39688 -1.14653,0 -1.19063,0.0294 -1.19063,0.79375 0,0.73075 0.0735,0.79375 0.92605,0.79375 0.74965,0 0.92604,0.10079 0.92604,0.52917 0,0.44347 -0.17639,0.52916 -1.08919,0.52916 -1.00042,0 -1.07619,0.0485 -0.92966,0.59532 0.0877,0.32742 0.16117,0.6846 0.16315,0.79375 0.002,0.10914 0.54813,0.19843 1.21364,0.19843 1.00962,0 1.19542,0.0767 1.12182,0.46302 -0.0708,0.37143 -0.41479,0.47861 -1.73919,0.5418 l -1.65099,0.0788 z m 5.6224,2.76727 c -0.34029,-0.1425 -0.59532,-0.47964 -0.59532,-0.78699 0,-0.64104 0.0709,-0.65145 1.03641,-0.15216 0.61957,0.32039 0.8258,0.32686 1.22048,0.0383 0.6523,-0.47697 0.35212,-1.08464 -0.80767,-1.635 -2.09571,-0.99448 -1.60563,-3.07997 0.76022,-3.23506 1.0989,-0.072 1.23015,-0.0214 1.23015,0.47501 0,0.4858 -0.11024,0.53497 -0.87687,0.39115 -1.25186,-0.23485 -1.76423,0.40699 -0.93877,1.17602 0.32588,0.3036 0.73019,0.552 0.89848,0.552 0.47366,0 1.18174,0.90649 1.18174,1.51288 0,1.28709 -1.75968,2.22889 -3.10885,1.66389 z m 6.46575,0.0919 c -0.10004,-0.10005 -0.1819,-1.29315 -0.1819,-2.65135 v -2.46944 h -0.79375 c -0.52916,0 -0.79375,-0.13229 -0.79375,-0.39688 0,-0.3197 0.41158,-0.39687 2.11667,-0.39687 1.70509,0 2.11667,0.0772 2.11667,0.39687 0,0.26351 -0.26352,0.39688 -0.78417,0.39688 h -0.78417 l -0.0757,2.55824 c -0.0698,2.35681 -0.30145,3.08096 -0.81987,2.56255 z m 4.40487,-0.24378 c -0.22052,-0.57467 0.33932,-1.11509 0.74003,-0.71438 0.33868,0.33868 0.12887,1.12904 -0.29971,1.12904 -0.15466,0 -0.3528,-0.1866 -0.44032,-0.41466 z"
          id="path304"
        />
      </g>
    </svg>
  );
}
