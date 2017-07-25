dec_places=4 //precision
second_dec = [0,1,2,3,4,5,6,7,8,9]
upto_first_dec = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0]
val = [
[0.50000,0.50399,0.50798,0.51197,0.51595,0.51994,0.52392,0.52790,0.53188,0.53586],
[0.53983,0.54380,0.54776,0.55172,0.55567,0.55966,0.56360,0.56749,0.57142,0.57535],
[0.57926,0.58317,0.58706,0.59095,0.59483,0.59871,0.60257,0.60642,0.61026,0.61409],
[0.61791,0.62172,0.62552,0.62930,0.63307,0.63683,0.64058,0.64431,0.64803,0.65173],
[0.65542,0.65910,0.66276,0.66640,0.67003,0.67364,0.67724,0.68082,0.68439,0.68793],
[0.69146,0.69497,0.69847,0.70194,0.70540,0.70884,0.71226,0.71566,0.71904,0.72240],
[0.72575,0.72907,0.73237,0.73565,0.73891,0.74215,0.74537,0.74857,0.75175,0.75490],
[0.75804,0.76115,0.76424,0.76730,0.77035,0.77337,0.77637,0.77935,0.78230,0.78524],
[0.78814,0.79103,0.79389,0.79673,0.79955,0.80234,0.80511,0.80785,0.81057,0.81327],
[0.81594,0.81859,0.82121,0.82381,0.82639,0.82894,0.83147,0.83398,0.83646,0.83891],
[0.84134,0.84375,0.84614,0.84849,0.85083,0.85314,0.85543,0.85769,0.85993,0.86214],
[0.86433,0.86650,0.86864,0.87076,0.87286,0.87493,0.87698,0.87900,0.88100,0.88298],
[0.88493,0.88686,0.88877,0.89065,0.89251,0.89435,0.89617,0.89796,0.89973,0.90147],
[0.90320,0.90490,0.90658,0.90824,0.90988,0.91149,0.91308,0.91466,0.91621,0.91774],
[0.91924,0.92073,0.92220,0.92364,0.92507,0.92647,0.92785,0.92922,0.93056,0.93189],
[0.93319,0.93448,0.93574,0.93699,0.93822,0.93943,0.94062,0.94179,0.94295,0.94408],
[0.94520,0.94630,0.94738,0.94845,0.94950,0.95053,0.95154,0.95254,0.95352,0.95449],
[0.95543,0.95637,0.95728,0.95818,0.95907,0.95994,0.96080,0.96164,0.96246,0.96327],
[0.96407,0.96485,0.96562,0.96638,0.96712,0.96784,0.96856,0.96926,0.96995,0.97062],
[0.97128,0.97193,0.97257,0.97320,0.97381,0.97441,0.97500,0.97558,0.97615,0.97670],
[0.97725,0.97778,0.97831,0.97882,0.97932,0.97982,0.98030,0.98077,0.98124,0.98169],
[0.98214,0.98257,0.98300,0.98341,0.98382,0.98422,0.98461,0.98500,0.98537,0.98574],
[0.98610,0.98645,0.98679,0.98713,0.98745,0.98778,0.98809,0.98840,0.98870,0.98899],
[0.98928,0.98956,0.98983,0.99010,0.99036,0.99061,0.99086,0.99111,0.99134,0.99158],
[0.99180,0.99202,0.99224,0.99245,0.99266,0.99286,0.99305,0.99324,0.99343,0.99361],
[0.99379,0.99396,0.99413,0.99430,0.99446,0.99461,0.99477,0.99492,0.99506,0.99520],
[0.99534,0.99547,0.99560,0.99573,0.99585,0.99598,0.99609,0.99621,0.99632,0.99643],
[0.99653,0.99664,0.99674,0.99683,0.99693,0.99702,0.99711,0.99720,0.99728,0.99736],
[0.99744,0.99752,0.99760,0.99767,0.99774,0.99781,0.99788,0.99795,0.99801,0.99807],
[0.99813,0.99819,0.99825,0.99831,0.99836,0.99841,0.99846,0.99851,0.99856,0.99861],
[0.99865,0.99869,0.99874,0.99878,0.99882,0.99886,0.99889,0.99893,0.99896,0.99900]
]
lower_limit = -4
upper_limit = 4
step = 0.001

// Measure plotting unit in pixel


$(function()
{
  ctx = document.getElementById('canvas').getContext('2d');

  canvas_width = $('#canvas').width();
  canvas_height = $('#canvas').height();
  x_plotting_unit = canvas_width/8;
  y_plotting_unit = canvas_height*2;
  y = [];
  lower_offset_from_canvas = 40;
  length_of_xtick = 10;
  mean_in_graph = Math.abs(lower_limit);

  function plot_z_score_area()
  {
    z = parseFloat($('input#z').val());
    abs_z = Math.abs(z)
    ufd = Number(abs_z-(abs_z*100%10)/100).toFixed(1);
    sec_d = Number(abs_z*100%10).toFixed(0);
    ufd_index = Math.round(ufd*10);
    if (z>=0)
    {
      area_left_of_z = val[ufd_index][sec_d];
      area_right_of_z = 1 - area_left_of_z;
      area_between_0_and_z = area_left_of_z - 0.5;
      area_between_0_and_minus_z = area_between_0_and_z;
      area_to_left_of_minus_z = area_right_of_z;
      area_between_minus_z_and_z = 2*area_between_0_and_z;
    }
    else {
      area_left_of_plus_z = val[ufd_index][sec_d];
      area_between_0_and_plus_z = area_left_of_plus_z - 0.5
      area_right_of_plus_z = 1-area_left_of_plus_z;
      area_left_of_z = 1-area_between_0_and_plus_z-0.5
      area_right_of_z = 1 - area_left_of_z
      area_between_z_and_plus_z = 2*area_between_0_and_plus_z;
      area_between_0_and_z = area_between_0_and_plus_z;
      area_between_minus_z_and_z = area_between_z_and_plus_z;
    }
    $('span#area_left_of_z').html(area_left_of_z);

    if (z >= 0)
    {
      X_right = (mean_in_graph+z)*x_plotting_unit;
      ctx.moveTo(X_right,canvas_height-lower_offset_from_canvas);
      ctx.lineTo(X_right,0);
      X_left = (mean_in_graph-z)*x_plotting_unit;
      ctx.moveTo(X_left,canvas_height-lower_offset_from_canvas);
      ctx.lineTo(X_left,0);
      ctx.fillStyle = '#abefcd';
      ctx.strokeStyle = '#125645';
      for (x=lower_limit;x<=z;x=x+step)
      {
        yval  = (1/(Math.sqrt(2*Math.PI)))*(Math.pow(Math.E,(-1*Math.pow(x,2)/2)));
        X = (x + mean_in_graph)*x_plotting_unit;
        Y = canvas_height - (yval*y_plotting_unit)-lower_offset_from_canvas;
        ctx.rect(X,Y,1,canvas_height-Y-lower_offset_from_canvas);
      }
    }

    else
    {
      X_right = (mean_in_graph+z)*x_plotting_unit;
      ctx.moveTo(X_right,canvas_height-lower_offset_from_canvas);
      ctx.lineTo(X_right,0);
      ctx.fillStyle = '#abefcd';
      ctx.strokeStyle = '#125645';
      for (x=lower_limit;x<=z;x=x+step)
      {
        yval  = (1/(Math.sqrt(2*Math.PI)))*(Math.pow(Math.E,(-1*Math.pow(x,2)/2)));
        X = (x + mean_in_graph)*x_plotting_unit;
        Y = canvas_height - (yval*y_plotting_unit)-lower_offset_from_canvas;
        ctx.rect(X,Y,1,canvas_height-Y-lower_offset_from_canvas);
      }
    }
    ctx.strokeText(area_left_of_z,20,20);
    ctx.stroke();
    ctx.fill()
    $('span#area_right_of_z').html(area_right_of_z);
    $('span#area_between_0_and_z').html(area_between_0_and_z);
    $('span#area_between_minus_z_and_z').html(area_between_minus_z_and_z);
  }

  function draw_normal_curve()
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0,canvas_height-lower_offset_from_canvas);
    ctx.lineTo(2*upper_limit*x_plotting_unit, canvas_height-lower_offset_from_canvas);
    for (xtick=lower_limit;xtick<=upper_limit;xtick++)
    {
      ctx.moveTo((xtick+upper_limit)*x_plotting_unit,canvas_height-lower_offset_from_canvas);
      ctx.lineTo((xtick+upper_limit)*x_plotting_unit,canvas_height-lower_offset_from_canvas + length_of_xtick);
      ctx.strokeText(xtick,(xtick+upper_limit)*x_plotting_unit-2,canvas_height-lower_offset_from_canvas + length_of_xtick + 12);
    }
    for (x=lower_limit;x<=upper_limit;x=x+step)
    {
      yval  = (1/(Math.sqrt(2*Math.PI)))*(Math.pow(Math.E,(-1*Math.pow(x,2)/2)));
      y.push(yval);
      X = (x + mean_in_graph)*x_plotting_unit;
      Y = canvas_height - (yval*y_plotting_unit)-lower_offset_from_canvas;
      ctx.rect(X,Y,1,1);
    }
    ctx.stroke();
    ctx.closePath();
  }

  function redraw_normal_curve()
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0,canvas_height-lower_offset_from_canvas);
    ctx.lineTo(2*upper_limit*x_plotting_unit, canvas_height-lower_offset_from_canvas);
    for (xtick=lower_limit;xtick<=upper_limit;xtick++)
    {
      ctx.moveTo((xtick+upper_limit)*x_plotting_unit,canvas_height-lower_offset_from_canvas);
      ctx.lineTo((xtick+upper_limit)*x_plotting_unit,canvas_height-lower_offset_from_canvas + length_of_xtick);
      ctx.strokeText(xtick,(xtick+upper_limit)*x_plotting_unit-2,canvas_height-lower_offset_from_canvas + length_of_xtick + 12);
    }
    for (x=lower_limit,i=0;x<=upper_limit;x=x+step,i++)
    {
      X = (x + mean_in_graph)*x_plotting_unit;
      Y = canvas_height - (y[i]*y_plotting_unit)-lower_offset_from_canvas;
      ctx.rect(X,Y,1,1);
    }
    ctx.stroke();
    ctx.closePath();
  }

  draw_normal_curve();

  $('input#zscore').attr('min',lower_limit);
  $('input#zscore').attr('max',upper_limit);
  $('input#zscore').attr('step',step);
  $('input#zscore').width(canvas_width);
  $('input#zscore').on('change',function()
  {
    redraw_normal_curve();
    $('input#z').val($(this).val());
    plot_z_score_area();
  });

  $('input#z').change(function()
  {
    redraw_normal_curve();
    $('input#zscore').val($(this).val());
    plot_z_score_area();
  });
});
