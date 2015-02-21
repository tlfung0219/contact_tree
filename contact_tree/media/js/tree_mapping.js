// mapping
var MappingView = Backbone.View.extend({

    initialize: function(args) {
        var self = this;
        this.containerID = args.containerID;
        // bind view with model
        console.log("in mapping initialize");
        // _.bindAll(this, 'set_option');
        _.bindAll(this, 'set_component');
        _.bindAll(this, 'restructure');

        // util.sampleTree("ori", "sidekey_tree");
        // this.mode = self.model.get("view_mode");
        
        $( "#sidekey_dialog" ).dialog({
            autoOpen: false,
            // height: 600,
            // width: 800,
            height: $(window).width()*0.7*0.7,
            width: $(window).width()*0.7,
            modal: true,
            resizable: false
        });

        $( "#map" ).click(function() {
            $('#mapping_img').attr('src', 'media/img/real_mix_tree.png');
            $( "#sidekey_dialog" ).dialog( "open" );
            // self.myattribute = JSON.parse(JSON.stringify(self.model.get("attribute")));
            self.set_component();

        });

        // this.model.bind('change:view_mode', this.set_option);
        // this.model.bind('change:attribute', this.set_option);
        this.model.bind('change:attribute', this.restructure);
        this.model.bind('change:attribute', this.set_component);        
        
        // this.attribute = self.model.get("attribute");
        // this.myattribute = {};
        // this.attr_array = [];
        // this.data_mode = self.model.get("view_mode");
        // this.set_default = default_attribute[this.data_mode];

        self.set_option();
    },

    set_option: function(){
        var self = this;
        /*
        $("#stick_label").click(function() {
            self.stick_map();
        });
        */
        $("#trunk_label").click(function() {
            $("#sidekey_operation").hide();
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            self.trunk_map();

        });

        $("#branch_label").click(function() {
            $("#sidekey_operation").hide();
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            self.branch_map();
        });

        $("#bside_label").click(function() {
            $("#sidekey_operation").hide();
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            self.bside_map();
        });

        $("#root_label").click(function() {
            $("#sidekey_operation").hide();
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            self.root_map();
        });

        $("#leaf_size_label").click(function() {
            $("#sidekey_operation").hide();
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            self.leaf_size_map();
        });

        $("#leaf_color_label").click(function() {
            $("#sidekey_operation").hide();
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            self.leaf_color_map();
        });

        $("#leaf_highlight_label").click(function() {
            $("#sidekey_operation").hide();
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            self.leaf_highlight_map();
        });

        $("#fruit_size_label").click(function() {
            $("#sidekey_operation").hide();
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            self.fruit_size_map();
        });        

    },

    stick_map: function(){
        console.log("in stick mapping");
        $("#sidekey_selection").show();
        $("#sidekey_title").text("Stick Mapping:");
        $("#sidekey_description").text("Stick Mapping Description");
        // d3.json("get_attribute/?candidate=" + request, function(result) {
        //     alert('success');
        //     console.log(result);                                  
        // });        
        
    },

    trunk_map: function(){
        var self = this;
        var data_mode = self.model.get("view_mode");
        var attr_map = self.model.get("attribute");
        var attr_opt = self.model.get("attr_option");
        console.log("in trunk mapping");
        $('#mapping_img').attr('src', 'media/img/trunk_mapping.png');

        $("#sidekey_selection").show();
        $("#sidekey_title").text("Trunk Mapping:");
        $("#sidekey_description").text("The trunk side mapping will separate alters to place into left or right side of the trunk, \
            so the attribute is better to be related with alter or we will random place the same alter into duplication sticks. \
            If the attribute contains more than two categories, you will need to separate into two groups using check and uncheck.");
        // console.log("in trunk mapping: ", component_attribute[data_mode]);
        // console.log("in trunk mapping: ", attr_map);
        $("#sidekeyselect").empty();
        var container = document.getElementById("sidekeyselect");
        // container.setAttribute("class", "sidekey_selection");
        for(s in component_attribute[data_mode]){
            if(s == "none"){}
            else{
                if(component_attribute[data_mode][s][0].length == 0 || (attr_opt.indexOf(s) != -1 && s != attr_map["trunk"]))
                    continue
            }
            
            var selection_opt = document.createElement('option');
            selection_opt.value = s;
            selection_opt.innerHTML = s;
            selection_opt.setAttribute("class", "myfont3");
            if(s == attr_map["trunk"])
                selection_opt.setAttribute("selected", true);
            container.appendChild(selection_opt);
        }

        $("#sidekeyselect").change(function(){
            $("#mark_group_select").empty();
            if( $("#sidekeyselect").val() != "none"){
                var data_mode = self.model.get("view_mode");
                var attr_map = self.model.get("attribute");
                // console.log(component_attribute);
                // console.log(component_attribute[data_mode]);
                // console.log(data_mode);
                // console.log(component_attribute[data_mode][$("#sidekeyselect").val()]);
                $("#sidekey_operation").show();
                var attr_container = document.getElementById("mark_group_select");
                // $("#mark_group").text("✔ as Left Side of Trunk:");
                $("#mark_group").hide();
                if(component_attribute[data_mode][$("#sidekeyselect").val()][5] == "categorical"){
                    var group1 = document.createElement("div");
                    var group2 = document.createElement("div");
                    var list1 = document.createElement("ul");
                    var list2 = document.createElement("ul");
                    group1.setAttribute("class", "column left first");
                    group2.setAttribute("class", "column left");

                    list1.id = "mapping_group1";
                    list2.id = "mapping_group2";
                    list1.setAttribute("class", "sortable-list");
                    list2.setAttribute("class", "sortable-list");

                    // list1.setAttribute("style", "background-color:#21b2ef;");rgba(33, 178, 239, 0.5)
                    // list2.setAttribute("style", "background-color:#ec5b5e;");rgba(236, 91, 94, 0.5)

                    list1.setAttribute("style", "background-color:rgba(33, 178, 239, 0.5);");
                    list2.setAttribute("style", "background-color:rgba(236, 91, 94, 0.5);");
                    
                    var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0].length
                    for(var c = 0; c < total_items; c ++){
                        var item = document.createElement("li");
                        item.setAttribute("class", "sortable-item");
                        item.innerHTML = component_attribute[data_mode][$("#sidekeyselect").val()][0][c];
                        item.value = component_attribute[data_mode][$("#sidekeyselect").val()][0][c];
                        if(c < total_items/2)
                            list1.appendChild(item);
                        else
                            list2.appendChild(item);
                    }
                    group1.appendChild(list1);
                    group2.appendChild(list2);
                    attr_container.appendChild(group1);
                    attr_container.appendChild(group2);

                    $('#mark_group_select .sortable-list').sortable({
                        connectWith: '#mark_group_select .sortable-list'
                    });
                }
                else{
                    var attr_min = parseInt(component_attribute[data_mode][$("#sidekeyselect").val()][1]);
                    var attr_max = parseInt(component_attribute[data_mode][$("#sidekeyselect").val()][2]);

                    var sep = document.createElement("div");
                    var sep_title = document.createElement("span");
                    var sep_input = document.createElement("input");
                    var group_slider = document.createElement("div");
                    var range = document.createElement("div");
                    var range_min = document.createElement("span");
                    var range_max = document.createElement("span");
                    
                    sep_input.id = "sep_group";
                    sep_title.innerHTML = "Separate in: ";
                    group_slider.id = "binary_slider";
                    sep_title.setAttribute("class", "myfont3");
                    sep.setAttribute("style", "margin-top:10px;");
                    group_slider.setAttribute("style", "background:rgba(236, 91, 94, 0.5); margin-top:10px; margin-left:5px;");

                    range_min.innerHTML = attr_min;
                    range_max.innerHTML = attr_max;
                    range_min.setAttribute("class", "left");
                    range_max.setAttribute("class", "right");


                    // group_slider.appendChild(group_handle);
                    sep.appendChild(sep_title);
                    sep.appendChild(sep_input);
                    range.appendChild(range_min);
                    range.appendChild(range_max);
                    attr_container.appendChild(sep);
                    attr_container.appendChild(group_slider);
                    attr_container.appendChild(range);

                    
                    $("#binary_slider").slider({
                        orientation: "horizontal",
                        range: "min",
                        min: attr_min,
                        max: attr_max,
                        value: Math.floor((attr_min + attr_max)/2),
                        slide: function( event, ui ) {
                            // console.log("slider val: ", ui.value);
                            $("#sep_group").val(ui.value);
                        }
                    });
                    $('#binary_slider .ui-slider-range').css({'background':'rgba(33, 178, 239, 0.5)'});
                    $("#sep_group").val(Math.floor((attr_min + attr_max)/2));

                    $("#sep_group").change(function(){
                        // var attr_min = parseInt(component_attribute[data_mode][$("#sidekeyselect").val()][1]);
                        // var attr_max = parseInt(component_attribute[data_mode][$("#sidekeyselect").val()][2]);
                        if(this.value > attr_max) this.value = attr_max;
                        if(this.value < attr_min) this.value = attr_min;
                        $("#binary_slider").slider("value", this.value);
                    });
                    
                }

                // var br = document.createElement("br");
                /*
                if(component_attribute[data_mode][$("#sidekeyselect").val()][0].length == 2){
                    var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0].length
                    for(var c = 0; c < total_items; c ++){
                        var attr_label = document.createElement('label');
                        var attr_input = document.createElement('input');
                        var br = document.createElement("br");
                        attr_label.innerHTML = component_attribute[data_mode][$("#sidekeyselect").val()][0][c];

                        attr_input.value = component_attribute[data_mode][$("#sidekeyselect").val()][0][c];
                        attr_input.setAttribute("class", "myfont3 mark_group_checkbox");
                        attr_input.setAttribute("style", "position:absolute; left:30px;");
                        attr_input.type = "checkbox";
                        attr_input.name = "mark_group_checkbox";
                        if(c < total_items/2)
                            attr_input.setAttribute("checked", true);
                        attr_label.appendChild(attr_input);
                        // attr_label.appendChild(br);
                        attr_container.appendChild(attr_label);
                        attr_container.appendChild(br);
                    }
                    // $("#sidekey_submit").text("Dnoe");
                }
                else{
                    var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0].length
                    for(var c = 0; c < total_items; c ++){
                        var attr_label = document.createElement('label');
                        var attr_input = document.createElement('input');
                        var br = document.createElement("br");
                        attr_label.innerHTML = component_attribute[data_mode][$("#sidekeyselect").val()][0][c];

                        attr_input.value = component_attribute[data_mode][$("#sidekeyselect").val()][0][c];
                        attr_input.setAttribute("class", "myfont3 mark_group_checkbox");
                        attr_input.setAttribute("style", "position:absolute; left:30px;");
                        attr_input.type = "checkbox";
                        attr_input.name = "mark_group_checkbox";
                        if(c < total_items/2)
                            attr_input.setAttribute("checked", true);
                        attr_label.appendChild(attr_input);
                        // attr_label.appendChild(br);
                        attr_container.appendChild(attr_label);
                        attr_container.appendChild(br);
                    }           
                    
                }
                */
                
            }

            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            
            $("#sidekey_submit_trunk").show();
            $("#sidekey_submit_trunk").text("Dnoe");
            // $("#sidekey_submit").show();
        });

        $("#sidekey_submit_trunk").click(function(){
            var data_mode = self.model.get("view_mode");
            var attr_map = self.model.get("attribute");
            var attr_opt = self.model.get("attr_option");
            var ego_selections = self.model.get("selected_egos");

            console.log(self.model.get("attribute"));
            console.log(self.model.get("attr_option"));
            $("#sidekey_submit_trunk").text("Update");
            $("#sidekey_submit_trunk").attr("disabled", true);
            // $("#sidekey_img").attr("disabled", true);
            $("#block_layer").show();

            if(attr_map["trunk"] in attribute_mapping){
                console.log(attribute_mapping);
                delete attribute_mapping[attr_map["trunk"]];
                // attribute_mapping[$("#sidekeyselect").val()] = {"0": [], "1": []};
            }

            if( $("#sidekeyselect").val() == "none"){}
            
            else{
                var update_info = data_mode + ":-ctree_trunk:-" + $("#sidekeyselect").val();
                if(component_attribute[data_mode][$("#sidekeyselect").val()][5] == "categorical"){
                    attribute_mapping[$("#sidekeyselect").val()] = {"0": [], "1": []};
                    /*
                    $('.mark_group_checkbox:checked').each(function(){
                        update_info += ":-" + $(this).val();
                        attribute_mapping[$("#sidekeyselect").val()]["0"].push($(this).val());
                    });
                    */
                    $('#mapping_group1').children().each(function(){
                        console.log($(this));
                        console.log($(this).val());
                        console.log(attribute_mapping);
                        update_info += ":-" + $(this).val();
                        attribute_mapping[$("#sidekeyselect").val()]["0"].push($(this).val());
                    });
                    $('#mapping_group2').children().each(function(){
                        console.log($(this));
                        console.log($(this).val());
                        // update_info += ":-" + $(this).val();
                        attribute_mapping[$("#sidekeyselect").val()]["1"].push($(this).val());
                    });
                    for(ego in ego_selections){
                        update_info += ":=" + ego;
                    }

                }
                else{
                    attribute_mapping[$("#sidekeyselect").val()] = {"0": [], "1": []};
                    /*
                    $('.mark_group_checkbox:checked').each(function(){
                        update_info += ":-" + $(this).val();
                        attribute_mapping[$("#sidekeyselect").val()]["0"].push($(this).val());
                    });
                    */
                    update_info += ":-" + $("#sep_group").val();
                    attribute_mapping[$("#sidekeyselect").val()]["0"].push($("#sep_group").val());
                    attribute_mapping[$("#sidekeyselect").val()]["1"].push($("#sep_group").val());
                    
                    for(ego in ego_selections){
                        update_info += ":=" + ego;
                    }

                }
                
                var request_url = "update_binary/?update="+update_info;
                console.log(request_url);
                d3.json(request_url, function(result){
                    console.log("finish update");
                    var set_update_info = function(data){
                        var attr_map = self.model.get("attribute");
                        var attr_opt = self.model.get("attr_option");
                        // console.log(data)
                        $("#block_layer").hide();
                        $("#sidekey_submit_trunk").text("Done");
                        $("#sidekey_submit_trunk").removeAttr("disabled");
                        // attr_opt.replace(attr_map["trunk"], $("#sidekeyselect").val());
                        attr_opt[attr_opt.indexOf(attr_map["trunk"])] = $("#sidekeyselect").val();
                        attr_map["trunk"] = $("#sidekeyselect").val()
                        self.model.set({"attribute": attr_map});
                        self.model.set({"attr_option": attr_opt});
                        self.model.trigger('change:attribute');
                        // console.log(self.model.get("attribute"));
                        // console.log(self.model.get("attr_option"));
                    };
                    set_update_info(result);
                });
            }            

        });


    },

    branch_map: function(){
        var self = this;
        var data_mode = self.model.get("view_mode");
        var attr_map = self.model.get("attribute");
        var attr_opt = self.model.get("attr_option");
        console.log("in branch mapping");
        $('#mapping_img').attr('src', 'media/img/branch_mapping.png');
        $("#sidekey_selection").show();
        $("#sidekey_title").text("Branch Layer Mapping:");
        $("#sidekey_description").text("The branch mapping will place alter into different layer, so the attribute is better to be related with alter or we will random place the same alter into duplication sticks. This determines the height of the tree and it will be menful if this attribute is in a order.");

        $("#sidekeyselect").empty();
        var container = document.getElementById("sidekeyselect");
        // container.setAttribute("class", "sidekey_selection");
        for(s in component_attribute[data_mode]){
            if(s == "none"){}
            else{
                if(component_attribute[data_mode][s][0].length == 0 || (attr_opt.indexOf(s) != -1 && s != attr_map["branch"]))
                    continue
            }
            var selection_opt = document.createElement('option');
            selection_opt.value = s;
            selection_opt.innerHTML = s;
            selection_opt.setAttribute("class", "myfont3");
            if(s == attr_map["branch"])
                selection_opt.setAttribute("selected", true);
            container.appendChild(selection_opt);
        }

        $("#sidekeyselect").change(function(){
            $("#mark_group_select").empty();
            if( $("#sidekeyselect").val() != "none"){
                $("#sidekey_operation").show();
                $("#mark_group").text("Select Branch Layer:");
                var attr_container = document.getElementById("mark_group_select");
                var data_mode = self.model.get("view_mode");
                // var br = document.createElement("br");
                var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0]
                
                for(var c = 0; c < total_items.length; c ++){
                    var br = document.createElement("br");
                    var p = document.createElement("p");
                    var select_container = document.createElement("select");
                    var label_container = document.createElement("span");
                    select_container.value = total_items[c];
                    select_container.setAttribute("class", "mapping_selection");
                    select_container.setAttribute("style", "position:absolute; left:30px;");
                    select_container.id = "ori_attr_val_" + total_items[c];
                    label_container.innerHTML = total_items[c];
                    // br.innerHTML = "<p></p>";

                    for(var f_size_range = 0; f_size_range <= 20; f_size_range ++){
                        var selection_opt = document.createElement('option');
                        selection_opt.value = f_size_range;
                        selection_opt.innerHTML = f_size_range;
                        selection_opt.setAttribute("class", "myfont3");
                        if(f_size_range == total_items[c])
                            selection_opt.setAttribute("selected", true);
                        else if(20 < total_items[c] && f_size_range == 20)
                            selection_opt.setAttribute("selected", true);
                        select_container.appendChild(selection_opt);
                    }
                    attr_container.appendChild(label_container);
                    attr_container.appendChild(select_container);
                    attr_container.appendChild(br);
                    attr_container.appendChild(p);
                }
                
            }

            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            
            $("#sidekey_submit_branch").show();
            $("#sidekey_submit_branch").text("Dnoe");
            
        });

        $("#sidekey_submit_branch").click(function(){
            var data_mode = self.model.get("view_mode");
            var ego_selections = self.model.get("selected_egos");
            $("#sidekey_submit_branch").text("Update");
            $("#sidekey_submit_branch").attr("disabled", true);
            // $("#sidekey_img").attr("disabled", true);
            $("#block_layer").show();
            var size_map = {};

            var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0]
            for(var c = 0; c < total_items.length; c ++){
                var item_id = "#ori_attr_val_" + total_items[c];
                size_map[total_items[c]] = $(item_id).val();
            }
            
            var update_info = data_mode + ":-ctree_branch:-" + $("#sidekeyselect").val() + ":-" + JSON.stringify(size_map);

            
            for(ego in ego_selections){
                update_info += ":=" + ego;
            }
            

            var request_url = "update_layer/?update="+update_info;
            console.log(request_url);
            d3.json(request_url, function(result){
                console.log("finish update");
                var set_update_info = function(data){
                    var attr_map = self.model.get("attribute");
                    var attr_opt = self.model.get("attr_option");
                    // console.log(data)
                    $("#block_layer").hide();
                    $("#sidekey_submit_branch").text("Done");
                    $("#sidekey_submit_branch").removeAttr("disabled");

                    attr_opt[attr_opt.indexOf(attr_map["branch"])] = $("#sidekeyselect").val();
                    attr_map["branch"] = $("#sidekeyselect").val()
                    self.model.set({"attribute": attr_map});
                    self.model.set({"attr_option": attr_opt});
                    self.model.trigger('change:attribute');
                    // console.log(self.model.get("attribute"));
                    // console.log(self.model.get("attr_option"));
                };
                set_update_info(result);
            });

        });
    },

    bside_map: function(){
        var self = this;
        var data_mode = self.model.get("view_mode");
        var attr_map = self.model.get("attribute");
        var attr_opt = self.model.get("attr_option");
        console.log("in bside mapping");
        $('#mapping_img').attr('src', 'media/img/bside_mapping.png');
        $("#sidekey_selection").show();
        $("#sidekey_title").text("Branch Side Mapping:");
        $("#sidekey_description").text("The branch side mapping will separate alters to place into upper or lower side of the branch, and if the attribute is not related to alter information, we will map each alter into same position of the branch. If the attribute contains more than two categories, you will need to separate into two groups using check and uncheck.");

        $("#sidekeyselect").empty();
        var container = document.getElementById("sidekeyselect");
        // container.setAttribute("class", "sidekey_selection");
        for(s in component_attribute[data_mode]){
            if(s == "none"){}
            else{
                if(component_attribute[data_mode][s][0].length == 0 || (attr_opt.indexOf(s) != -1 && s != attr_map["bside"]))
                    continue
            }
            var selection_opt = document.createElement('option');
            selection_opt.value = s;
            selection_opt.innerHTML = s;
            selection_opt.setAttribute("class", "myfont3");
            if(s == attr_map["bside"])
                selection_opt.setAttribute("selected", true);
            container.appendChild(selection_opt);
        }

        $("#sidekeyselect").change(function(){
            $("#mark_group_select").empty();
            if( $("#sidekeyselect").val() != "none"){
                var data_mode = self.model.get("view_mode");
                var attr_map = self.model.get("attribute");
                // console.log(component_attribute);
                // console.log(component_attribute[data_mode]);
                // console.log(data_mode);
                // console.log(component_attribute[data_mode][$("#sidekeyselect").val()]);
                $("#sidekey_operation").show();
                var attr_container = document.getElementById("mark_group_select");
                $("#mark_group").hide();
                if(component_attribute[data_mode][$("#sidekeyselect").val()][5] == "categorical"){
                    var group1 = document.createElement("div");
                    var group2 = document.createElement("div");
                    var list1 = document.createElement("ul");
                    var list2 = document.createElement("ul");
                    group1.setAttribute("class", "column left first");
                    group2.setAttribute("class", "column left");

                    list1.id = "mapping_group1";
                    list2.id = "mapping_group2";
                    list1.setAttribute("class", "sortable-list");
                    list2.setAttribute("class", "sortable-list");

                    // list1.setAttribute("style", "background-color:#21b2ef;");rgba(33, 178, 239, 0.5)
                    // list2.setAttribute("style", "background-color:#ec5b5e;");rgba(236, 91, 94, 0.5)
                    list1.setAttribute("style", "background-color:rgba(236, 91, 94, 0.5);");
                    list2.setAttribute("style", "background-color:rgba(33, 178, 239, 0.5);");

                    var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0].length
                    for(var c = 0; c < total_items; c ++){
                        var item = document.createElement("li");
                        item.setAttribute("class", "sortable-item");
                        item.innerHTML = component_attribute[data_mode][$("#sidekeyselect").val()][0][c];
                        if(c < total_items/2)
                            list1.appendChild(item);
                        else
                            list2.appendChild(item);
                    }
                    group1.appendChild(list1);
                    group2.appendChild(list2);
                    attr_container.appendChild(group1);
                    attr_container.appendChild(group2);

                    $('#mark_group_select .sortable-list').sortable({
                        connectWith: '#mark_group_select .sortable-list'
                    });

                }
                else{
                    var attr_min = parseInt(component_attribute[data_mode][$("#sidekeyselect").val()][1]);
                    var attr_max = parseInt(component_attribute[data_mode][$("#sidekeyselect").val()][2]);

                    var sep = document.createElement("div");
                    var sep_title = document.createElement("span");
                    var sep_input = document.createElement("input");
                    var group_slider = document.createElement("div");
                    var range = document.createElement("div");
                    var range_min = document.createElement("span");
                    var range_max = document.createElement("span");
                    
                    sep_input.id = "sep_group";
                    sep_title.innerHTML = "Separate in: ";
                    group_slider.id = "binary_slider";
                    sep_title.setAttribute("class", "myfont3");
                    sep.setAttribute("style", "margin-top:10px;");
                    group_slider.setAttribute("style", "background:rgba(33, 178, 239, 0.4); margin-top:10px; margin-left:5px;");

                    range_min.innerHTML = attr_min;
                    range_max.innerHTML = attr_max;
                    range_min.setAttribute("class", "left");
                    range_max.setAttribute("class", "right");


                    // group_slider.appendChild(group_handle);
                    sep.appendChild(sep_title);
                    sep.appendChild(sep_input);
                    range.appendChild(range_min);
                    range.appendChild(range_max);
                    attr_container.appendChild(sep);
                    attr_container.appendChild(group_slider);
                    attr_container.appendChild(range);

                    
                    $("#binary_slider").slider({
                        orientation: "horizontal",
                        range: "min",
                        min: attr_min,
                        max: attr_max,
                        value: Math.floor((attr_min + attr_max)/2),
                        slide: function( event, ui ) {
                            // console.log("slider val: ", ui.value);
                            $("#sep_group").val(ui.value);
                        }
                    });
                    $('#binary_slider .ui-slider-range').css({'background':'rgba(246, 91, 94, 0.6)'});
                    $("#sep_group").val(Math.floor((attr_min + attr_max)/2));

                    $("#sep_group").change(function(){
                        // var attr_min = parseInt(component_attribute[data_mode][$("#sidekeyselect").val()][1]);
                        // var attr_max = parseInt(component_attribute[data_mode][$("#sidekeyselect").val()][2]);
                        if(this.value > attr_max) this.value = attr_max;
                        if(this.value < attr_min) this.value = attr_min;
                        $("#binary_slider").slider("value", this.value);
                    });
                }                

                /*
                $("#mark_group").text("✔ as Down Side of Branch:");
                var attr_container = document.getElementById("mark_group_select");
                // var br = document.createElement("br");
                if(component_attribute[data_mode][$("#sidekeyselect").val()][0].length == 2){
                    var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0].length
                    for(var c = 0; c < total_items; c ++){
                        var attr_label = document.createElement('label');
                        var attr_input = document.createElement('input');
                        var br = document.createElement("br");
                        attr_label.innerHTML = component_attribute[data_mode][$("#sidekeyselect").val()][0][c];

                        attr_input.value = component_attribute[data_mode][$("#sidekeyselect").val()][0][c];
                        attr_input.setAttribute("class", "myfont3 mark_group_checkbox");
                        attr_input.setAttribute("style", "position:absolute; left:30px;");
                        attr_input.type = "checkbox";
                        attr_input.name = "mark_group_checkbox";
                        if(c < total_items/2)
                            attr_input.setAttribute("checked", true);
                        attr_label.appendChild(attr_input);
                        // attr_label.appendChild(br);
                        attr_container.appendChild(attr_label);
                        attr_container.appendChild(br);
                    }
                    // $("#sidekey_submit").text("Dnoe");
                }
                else{
                    var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0].length
                    // if(total_items > 0){
                    for(var c = 0; c < total_items; c ++){
                        var attr_label = document.createElement('label');
                        var attr_input = document.createElement('input');
                        var br = document.createElement("br");
                        attr_label.innerHTML = component_attribute[data_mode][$("#sidekeyselect").val()][0][c];

                        attr_input.value = component_attribute[data_mode][$("#sidekeyselect").val()][0][c];
                        attr_input.setAttribute("class", "myfont3 mark_group_checkbox");
                        attr_input.setAttribute("style", "position:absolute; left:30px;");
                        attr_input.type = "checkbox";
                        attr_input.name = "mark_group_checkbox";
                        if(c < total_items/2)
                            attr_input.setAttribute("checked", true);
                        attr_label.appendChild(attr_input);
                        // attr_label.appendChild(br);
                        attr_container.appendChild(attr_label);
                        attr_container.appendChild(br);
                    }
                    // }   
                }
                */
            }

            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            
            $("#sidekey_submit_bside").show();
            $("#sidekey_submit_bside").text("Dnoe");
        });

        $("#sidekey_submit_bside").click(function(){
            var data_mode = self.model.get("view_mode");
            var attr_map = self.model.get("attribute");
            var attr_opt = self.model.get("attr_option");
            var ego_selections = self.model.get("selected_egos");

            console.log(self.model.get("attribute"));
            console.log(self.model.get("attr_option"));
            $("#sidekey_submit_bside").text("Update");
            $("#sidekey_submit_bside").attr("disabled", true);
            // $("#sidekey_img").attr("disabled", true);
            $("#block_layer").show();

            if(attr_map["bside"] in attribute_mapping){
                console.log(attribute_mapping);
                delete attribute_mapping[attr_map["bside"]];
                // attribute_mapping[$("#sidekeyselect").val()] = {"0": [], "1": []};
            }

            if( $("#sidekeyselect").val() == "none"){}

            else{
                var update_info = data_mode + ":-ctree_bside:-" + $("#sidekeyselect").val();
                if(component_attribute[data_mode][$("#sidekeyselect").val()][5] == "categorical"){
                    attribute_mapping[$("#sidekeyselect").val()] = {"0": [], "1": []};
                    /*
                    $('.mark_group_checkbox:checked').each(function(){
                        update_info += ":-" + $(this).val();
                        attribute_mapping[$("#sidekeyselect").val()]["0"].push($(this).val());
                    });
                    */
                    $('#mapping_group1').children().each(function(){
                        console.log($(this));
                        console.log($(this).val());
                        console.log(attribute_mapping);
                        update_info += ":-" + $(this).val();
                        attribute_mapping[$("#sidekeyselect").val()]["0"].push($(this).val());
                    });
                    $('#mapping_group2').children().each(function(){
                        console.log($(this));
                        console.log($(this).val());
                        // update_info += ":-" + $(this).val();
                        attribute_mapping[$("#sidekeyselect").val()]["1"].push($(this).val());
                    });
                    for(ego in ego_selections){
                        update_info += ":=" + ego;
                    }

                }
                else{
                    attribute_mapping[$("#sidekeyselect").val()] = {"0": [], "1": []};
                    /*
                    $('.mark_group_checkbox:checked').each(function(){
                        update_info += ":-" + $(this).val();
                        attribute_mapping[$("#sidekeyselect").val()]["0"].push($(this).val());
                    });
                    */
                    update_info += ":-" + $("#sep_group").val();
                    attribute_mapping[$("#sidekeyselect").val()]["0"].push($("#sep_group").val());
                    attribute_mapping[$("#sidekeyselect").val()]["1"].push($("#sep_group").val());
                    
                    for(ego in ego_selections){
                        update_info += ":=" + ego;
                    }

                }
                
                var request_url = "update_binary/?update="+update_info;
                console.log(request_url);
                d3.json(request_url, function(result){
                    console.log("finish update");
                    var set_update_info = function(data){
                        var attr_map = self.model.get("attribute");
                        var attr_opt = self.model.get("attr_option");
                        // console.log(data)
                        $("#block_layer").hide();
                        $("#sidekey_submit_bside").text("Done");
                        $("#sidekey_submit_bside").removeAttr("disabled");
                        // attr_opt.replace(attr_map["bside"], $("#sidekeyselect").val());
                        attr_opt[attr_opt.indexOf(attr_map["bside"])] = $("#sidekeyselect").val();
                        attr_map["bside"] = $("#sidekeyselect").val()
                        self.model.set({"attribute": attr_map});
                        self.model.set({"attr_option": attr_opt});
                        self.model.trigger('change:attribute');
                        // console.log(self.model.get("attribute"));
                        // console.log(self.model.get("attr_option"));
                    };
                    set_update_info(result);
                });
            }

        });
    },

    root_map: function(){
        var self = this;
        var data_mode = self.model.get("view_mode");
        var attr_map = self.model.get("attribute");
        var attr_opt = self.model.get("attr_option");
        console.log("in root mapping");
        $('#mapping_img').attr('src', 'media/img/root_mapping.png');
        $("#sidekey_selection").show();
        $("#sidekey_title").text("Root Mapping:");
        $("#sidekey_description").text("The root mapping will show the quantity of each different category of selected attribute. This can be seen as the summary of this tree with the selected attribute.");

        $("#sidekeyselect").empty();
        var container = document.getElementById("sidekeyselect");
        // container.setAttribute("class", "sidekey_selection");
        for(s in component_attribute[data_mode]){
            if(s == "none"){}
            else{
                if(component_attribute[data_mode][s][0].length == 0 || (attr_opt.indexOf(s) != -1 && s != attr_map["root"]))
                    continue
            }
            var selection_opt = document.createElement('option');
            selection_opt.value = s;
            selection_opt.innerHTML = s;
            selection_opt.setAttribute("class", "myfont3");
            if(s == attr_map["root"])
                selection_opt.setAttribute("selected", true);
            container.appendChild(selection_opt);
        }

        $("#sidekeyselect").change(function(){
            $("#mark_group_select").empty();
            if( $("#sidekeyselect").val() != "none"){
                // $("#mark_group_select").empty();

                // $("#sidekey_submit_trunk").hide();
                // $("#sidekey_submit_branch").hide();
                // $("#sidekey_submit_bside").hide();
                // $("#sidekey_submit_leaf_size").hide();
                // $("#sidekey_submit_leaf_color").hide();
                // $("#sidekey_submit_leaf_highlight").hide();
                // $("#sidekey_submit_fruit_size").hide();
            }

            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();

            $("#sidekey_submit_root").show();
            $("#sidekey_submit_root").text("Dnoe");
            
        });

        $("#sidekey_submit_root").click(function(){
            var attr_map = self.model.get("attribute");
            var attr_opt = self.model.get("attr_option");
            // console.log(component_attribute);
            // console.log(component_attribute[data_mode]);
            // console.log(data_mode);
            // console.log(component_attribute[data_mode][$("#sidekeyselect").val()]);
            
            attr_opt[attr_opt.indexOf(attr_map["root"])] = $("#sidekeyselect").val();
            attr_map["root"] = $("#sidekeyselect").val()
            self.model.set({"attribute": attr_map});
            self.model.set({"attr_option": attr_opt});
            self.model.trigger('change:attribute');
        });
    },

    leaf_size_map: function(){
        var self = this;
        var data_mode = self.model.get("view_mode");
        var attr_map = self.model.get("attribute");
        var attr_opt = self.model.get("attr_option");
        console.log("in leaf_size mapping");
        $('#mapping_img').attr('src', 'media/img/leaf_mapping.png');
        $("#sidekey_selection").show();
        $("#sidekey_title").text("Leaf Size Mapping:");
        $("#sidekey_description").text("The leaf size mapping will show the quantity of each contact as a leaf size, so the attribute is better to be related with the unique information. You also can choose the scale of the different between the size.");

        $("#sidekeyselect").empty();
        var container = document.getElementById("sidekeyselect");
        // container.setAttribute("class", "sidekey_selection");
        for(s in component_attribute[data_mode]){
            if(s == "none"){}
            else{
                if(component_attribute[data_mode][s][0].length == 0 || (attr_opt.indexOf(s) != -1 && s != attr_map["leaf_size"]))
                    continue
            }
            var selection_opt = document.createElement('option');
            selection_opt.value = s;
            selection_opt.innerHTML = s;
            selection_opt.setAttribute("class", "myfont3");
            if(s == attr_map["leaf_size"])
                selection_opt.setAttribute("selected", true);
            container.appendChild(selection_opt);
        }

        $("#sidekeyselect").change(function(){
            $("#mark_group_select").empty();
            if( $("#sidekeyselect").val() != "none"){                
                $("#sidekey_operation").show();
                $("#mark_group").text("Select Leaf Size Range:");
                var attr_container = document.getElementById("mark_group_select");

                // var br = document.createElement("br");
                var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0]
                // if(total_items.length > 0){
                for(var c = 0; c < total_items.length; c ++){
                    var br = document.createElement("br");
                    var p = document.createElement("p");
                    var select_container = document.createElement("select");
                    var label_container = document.createElement("span");
                    select_container.value = total_items[c];
                    select_container.setAttribute("class", "mapping_selection");
                    select_container.setAttribute("style", "position:absolute; left:30px;");
                    select_container.id = "ori_attr_val_" + total_items[c];
                    label_container.innerHTML = total_items[c];
                    // br.innerHTML = "<p></p>";

                    for(var f_size_range = 0; f_size_range <= 20; f_size_range ++){
                        var selection_opt = document.createElement('option');
                        selection_opt.value = f_size_range;
                        selection_opt.innerHTML = f_size_range;
                        selection_opt.setAttribute("class", "myfont3");
                        if(f_size_range == total_items[c])
                            selection_opt.setAttribute("selected", true);
                        else if(20 < total_items[c] && f_size_range == 20)
                            selection_opt.setAttribute("selected", true);
                        select_container.appendChild(selection_opt);
                    }
                    attr_container.appendChild(label_container);
                    attr_container.appendChild(select_container);
                    attr_container.appendChild(br);
                    attr_container.appendChild(p);
                }

                // }
            }
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();
            
            $("#sidekey_submit_leaf_size").show();
            $("#sidekey_submit_leaf_size").text("Dnoe");
            
        });

        $("#sidekey_submit_leaf_size").click(function(){
            var data_mode = self.model.get("view_mode");
            var ego_selections = self.model.get("selected_egos");
            $("#sidekey_submit_leaf_size").text("Update");
            $("#sidekey_submit_leaf_size").attr("disabled", true);
            // $("#sidekey_img").attr("disabled", true);
            $("#block_layer").show();
            var size_map = {};

            var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0]
            for(var c = 0; c < total_items.length; c ++){
                var item_id = "#ori_attr_val_" + total_items[c];
                size_map[total_items[c]] = $(item_id).val();
            }
            
            var update_info = data_mode + ":-ctree_leaf_size:-" + $("#sidekeyselect").val() + ":-" + JSON.stringify(size_map);

            
            for(ego in ego_selections){
                update_info += ":=" + ego;
            }

            

            var request_url = "update_layer/?update="+update_info;
            console.log(request_url);
            d3.json(request_url, function(result){
                console.log("finish update");
                var set_update_info = function(data){
                    var attr_map = self.model.get("attribute");
                    var attr_opt = self.model.get("attr_option");
                    // console.log(data)
                    $("#block_layer").hide();
                    $("#sidekey_submit_leaf_size").text("Done");
                    $("#sidekey_submit_leaf_size").removeAttr("disabled");

                    attr_opt[attr_opt.indexOf(attr_map["leaf_size"])] = $("#sidekeyselect").val();
                    attr_map["leaf_size"] = $("#sidekeyselect").val()
                    self.model.set({"attribute": attr_map});
                    self.model.set({"attr_option": attr_opt});
                    self.model.trigger('change:attribute');
                    // console.log(self.model.get("attribute"));
                    // console.log(self.model.get("attr_option"));
                };
                set_update_info(result);
            });

        });
    },

    leaf_color_map: function(){
        var self = this;
        var data_mode = self.model.get("view_mode");
        var attr_map = self.model.get("attribute");
        var attr_opt = self.model.get("attr_option");
        console.log("in leaf_color mapping");
        $('#mapping_img').attr('src', 'media/img/leaf_mapping.png');
        $("#sidekey_selection").show();
        $("#sidekey_title").text("Leaf Color Mapping:");
        $("#sidekey_description").text("The leaf color mapping will show the different category of each contact as a leaf color, so the attribute is better to be related with the unique information. You also can choose the group for the color.");

        $("#sidekeyselect").empty();
        var container = document.getElementById("sidekeyselect");
        // container.setAttribute("class", "sidekey_selection");
        for(s in component_attribute[data_mode]){
            if(s == "none"){}
            else{
                if(component_attribute[data_mode][s][0].length == 0 || (attr_opt.indexOf(s) != -1 && s != attr_map["leaf_color"]))
                    continue
            }
            var selection_opt = document.createElement('option');
            selection_opt.value = s;
            selection_opt.innerHTML = s;
            selection_opt.setAttribute("class", "myfont3");
            if(s == attr_map["leaf_color"])
                selection_opt.setAttribute("selected", true);
            container.appendChild(selection_opt);
        }

        $("#sidekeyselect").change(function(){
            $("#mark_group_select").empty();
            if( $("#sidekeyselect").val() != "none"){                
                $("#sidekey_operation").show();
                $("#mark_group").text("Select Leaf Color Range:");
                var attr_container = document.getElementById("mark_group_select");

                // var br = document.createElement("br");
                var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0]
                // if(total_items.length > 0){
                for(var c = 0; c < total_items.length; c ++){
                    var br = document.createElement("br");
                    var p = document.createElement("p");
                    var select_container = document.createElement("select");
                    var label_container = document.createElement("span");
                    select_container.value = total_items[c];
                    select_container.setAttribute("class", "mapping_selection");
                    select_container.setAttribute("style", "position:absolute; left:30px;");
                    select_container.id = "ori_attr_val_" + total_items[c];
                    label_container.innerHTML = total_items[c];
                    // br.innerHTML = "<p></p>";

                    for(var f_size_range = 0; f_size_range <= 20; f_size_range ++){
                        var selection_opt = document.createElement('option');
                        selection_opt.value = f_size_range;
                        selection_opt.innerHTML = f_size_range;
                        selection_opt.setAttribute("class", "myfont3");
                        if(f_size_range == total_items[c])
                            selection_opt.setAttribute("selected", true);
                        else if(20 < total_items[c] && f_size_range == 20)
                            selection_opt.setAttribute("selected", true);
                        select_container.appendChild(selection_opt);
                    }
                    attr_container.appendChild(label_container);
                    attr_container.appendChild(select_container);
                    attr_container.appendChild(br);
                    attr_container.appendChild(p);
                }

                // }

            }
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_highlight").hide();
            $("#sidekey_submit_fruit_size").hide();

            $("#sidekey_submit_leaf_color").show();
            $("#sidekey_submit_leaf_color").text("Dnoe");
            
        });

        $("#sidekey_submit_leaf_color").click(function(){
            var data_mode = self.model.get("view_mode");
            var ego_selections = self.model.get("selected_egos");
            $("#sidekey_submit_leaf_color").text("Update");
            $("#sidekey_submit_leaf_color").attr("disabled", true);
            // $("#sidekey_img").attr("disabled", true);
            $("#block_layer").show();
            var size_map = {};

            var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0]
            for(var c = 0; c < total_items.length; c ++){
                var item_id = "#ori_attr_val_" + total_items[c];
                size_map[total_items[c]] = $(item_id).val();
            }
            
            var update_info = data_mode + ":-ctree_leaf_color:-" + $("#sidekeyselect").val() + ":-" + JSON.stringify(size_map);

            
            for(ego in ego_selections){
                update_info += ":=" + ego;
            }

            

            var request_url = "update_layer/?update="+update_info;
            console.log(request_url);
            d3.json(request_url, function(result){
                console.log("finish update");
                var set_update_info = function(data){
                    var attr_map = self.model.get("attribute");
                    var attr_opt = self.model.get("attr_option");
                    // console.log(data)
                    $("#block_layer").hide();
                    $("#sidekey_submit_leaf_color").text("Done");
                    $("#sidekey_submit_leaf_color").removeAttr("disabled");

                    attr_opt[attr_opt.indexOf(attr_map["leaf_color"])] = $("#sidekeyselect").val();
                    attr_map["leaf_color"] = $("#sidekeyselect").val()
                    self.model.set({"attribute": attr_map});
                    self.model.set({"attr_option": attr_opt});
                    self.model.trigger('change:attribute');
                    // console.log(self.model.get("attribute"));
                    // console.log(self.model.get("attr_option"));
                };
                set_update_info(result);
            });

        });
    },

    leaf_highlight_map: function(){
        var self = this;
        var data_mode = self.model.get("view_mode");
        var attr_map = self.model.get("attribute");
        var attr_opt = self.model.get("attr_option");
        console.log("in leaf_highlight mapping");
        $('#mapping_img').attr('src', 'media/img/leaf_highlight_mapping.png');
        $("#sidekey_selection").show();
        $("#sidekey_title").text("Leaf Highlight Mapping:");
        $("#sidekey_description").text("The leaf highlight mapping will show the every information whenever you hover your mouse on a leaf and highlight the leaves that share the same information.");

        $("#sidekeyselect").empty();
        var container = document.getElementById("sidekeyselect");
        // container.setAttribute("class", "sidekey_selection");
        for(s in component_attribute[data_mode]){
            if(s == "none"){}
            else{
                if(attr_opt.indexOf(s) != -1 && s != attr_map["leaf_id"])
                    continue
            }
            var selection_opt = document.createElement('option');
            selection_opt.value = s;
            selection_opt.innerHTML = s;
            selection_opt.setAttribute("class", "myfont3");
            if(s == attr_map["leaf_id"])
                selection_opt.setAttribute("selected", true);
            container.appendChild(selection_opt);
        }

        $("#sidekeyselect").change(function(){
            $("#mark_group_select").empty();
            if( $("#sidekeyselect").val() != "none"){
                $("#sidekey_operation").show();
                $("#mark_group").text("Highlight Leaf of Infomation: " + $("#sidekeyselect").val());                
            }
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_fruit_size").hide();

            $("#sidekey_submit_leaf_highlight").show();
            $("#sidekey_submit_leaf_highlight").text("Dnoe");
        });

        $("#sidekey_submit_leaf_highlight").click(function(){
            var attr_map = self.model.get("attribute");
            var attr_opt = self.model.get("attr_option");
            // console.log(component_attribute);
            // console.log(component_attribute[data_mode]);
            // console.log(data_mode);
            // console.log(component_attribute[data_mode][$("#sidekeyselect").val()]);
            
            attr_opt[attr_opt.indexOf(attr_map["leaf_id"])] = $("#sidekeyselect").val();
            attr_map["leaf_id"] = $("#sidekeyselect").val()
            self.model.set({"attribute": attr_map});
            self.model.set({"attr_option": attr_opt});
            self.model.trigger('change:attribute');
        });
    },

    fruit_size_map: function(){
        var self = this;
        var data_mode = self.model.get("view_mode");
        var attr_map = self.model.get("attribute");
        var attr_opt = self.model.get("attr_option");
        console.log("in fruit_size mapping");
        $('#mapping_img').attr('src', 'media/img/fruit_size_mapping.png');
        $("#sidekey_selection").show();
        $("#sidekey_title").text("Fruit Size Mapping:");
        $("#sidekey_description").text("he fruit size mapping will show the quantity of the alter as a fruit size, so the attribute must to be related with alter or we will random select one value as its size. You also can choose the scale of the different between the size.");

        $("#sidekeyselect").empty();
        var container = document.getElementById("sidekeyselect");
        // container.setAttribute("class", "sidekey_selection");
        
        for(s in component_attribute[data_mode]){
            if(s == "none"){}
            else{
                if(component_attribute[data_mode][s][0].length == 0 || component_attribute[data_mode][s][4] != "1" || (attr_opt.indexOf(s) != -1 && s != attr_map["fruit_size"]))
                    continue
            }
            var selection_opt = document.createElement('option');
            selection_opt.value = s;
            selection_opt.innerHTML = s;
            selection_opt.setAttribute("class", "myfont3");
            if(s == attr_map["fruit_size"])
                selection_opt.setAttribute("selected", true);
            container.appendChild(selection_opt);
        }

        $("#sidekeyselect").change(function(){
            $("#mark_group_select").empty();
            if($("#sidekeyselect").val() != "none"){                
                $("#sidekey_operation").show();
                $("#mark_group").text("Select Fruit Size Range:");
                var attr_container = document.getElementById("mark_group_select");

                // var br = document.createElement("br");
                var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0]
                // if(total_items.length > 0){
                for(var c = 0; c < total_items.length; c ++){
                    var br = document.createElement("br");
                    var p = document.createElement("p");
                    var select_container = document.createElement("select");
                    var label_container = document.createElement("span");
                    select_container.value = total_items[c];
                    select_container.setAttribute("class", "mapping_selection");
                    select_container.setAttribute("style", "position:absolute; left:30px;");
                    select_container.id = "ori_attr_val_" + total_items[c];
                    label_container.innerHTML = total_items[c];
                    // br.innerHTML = "<p></p>";

                    for(var f_size_range = 0; f_size_range <= 20; f_size_range ++){
                        var selection_opt = document.createElement('option');
                        selection_opt.value = f_size_range;
                        selection_opt.innerHTML = f_size_range;
                        selection_opt.setAttribute("class", "myfont3");
                        if(f_size_range == total_items[c])
                            selection_opt.setAttribute("selected", true);
                        else if(20 < total_items[c] && f_size_range == 20)
                            selection_opt.setAttribute("selected", true);
                        select_container.appendChild(selection_opt);
                    }
                    attr_container.appendChild(label_container);
                    attr_container.appendChild(select_container);
                    attr_container.appendChild(br);
                    attr_container.appendChild(p);
                }

                // }
                    
            }
            $("#sidekey_submit_trunk").hide();
            $("#sidekey_submit_branch").hide();
            $("#sidekey_submit_bside").hide();
            $("#sidekey_submit_root").hide();
            $("#sidekey_submit_leaf_size").hide();
            $("#sidekey_submit_leaf_color").hide();
            $("#sidekey_submit_leaf_highlight").hide();

            $("#sidekey_submit_fruit_size").show();
            $("#sidekey_submit_fruit_size").text("Dnoe");
            
        });

        $("#sidekey_submit_fruit_size").click(function(){
            var data_mode = self.model.get("view_mode");
            var ego_selections = self.model.get("selected_egos");
            $("#sidekey_submit_fruit_size").text("Update");
            $("#sidekey_submit_fruit_size").attr("disabled", true);
            // $("#sidekey_img").attr("disabled", true);
            $("#block_layer").show();
            var size_map = {};

            var total_items = component_attribute[data_mode][$("#sidekeyselect").val()][0]
            for(var c = 0; c < total_items.length; c ++){
                var item_id = "#ori_attr_val_" + total_items[c];
                size_map[total_items[c]] = $(item_id).val();
            }
            
            var update_info = data_mode + ":-ctree_fruit_size:-" + $("#sidekeyselect").val() + ":-" + JSON.stringify(size_map);

            
            for(ego in ego_selections){
                update_info += ":=" + ego;
            }

            

            var request_url = "update_layer/?update="+update_info;
            console.log(request_url);
            d3.json(request_url, function(result){
                console.log("finish update");
                var set_update_info = function(data){
                    var attr_map = self.model.get("attribute");
                    var attr_opt = self.model.get("attr_option");
                    // console.log(data)
                    $("#block_layer").hide();
                    $("#sidekey_submit_fruit_size").text("Done");
                    $("#sidekey_submit_fruit_size").removeAttr("disabled");

                    attr_opt[attr_opt.indexOf(attr_map["fruit_size"])] = $("#sidekeyselect").val();
                    attr_map["fruit_size"] = $("#sidekeyselect").val()
                    self.model.set({"attribute": attr_map});
                    self.model.set({"attr_option": attr_opt});
                    self.model.trigger('change:attribute');
                    // console.log(self.model.get("attribute"));
                    // console.log(self.model.get("attr_option"));
                };
                set_update_info(result);
            });

        });
    },

    set_component: function(){
        var self = this;
        var myattribute = JSON.parse(JSON.stringify(self.model.get("attribute")));
        $("#sidekey_selection").hide();
        $("#block_layer").hide();
        $("#sidekey_operation").hide();
        // $("#repeat_submit").hide();
        $("#sidekey_submit_trunk").hide();
        $("#sidekey_submit_branch").hide();
        $("#sidekey_submit_bside").hide();
        $("#sidekey_submit_root").hide();
        $("#sidekey_submit_leaf_size").hide();
        $("#sidekey_submit_leaf_color").hide();
        $("#sidekey_submit_leaf_highlight").hide();
        $("#sidekey_submit_fruit_size").hide();
        if(jQuery.isEmptyObject(myattribute)){
            $(".sidekey_map").css('visibility', 'hidden');
        }
        else{
            // console.log(self.myattribute);
            for(cmpt in myattribute){
                var cmpt_id = "#";
                if(cmpt == "stick")
                    continue;
                cmpt_id += cmpt + "_map";
                // console.log(cmpt_id);
                $(cmpt_id).text(myattribute[cmpt]);
            }
            $(".sidekey_map").css('visibility', 'visible');
            
        }
        // var data_mode = self.model.get("view_mode");
        
    },


    restructure: function(){
        var self = this;
        var ego_selections = self.model.get("selected_egos");
        if(jQuery.isEmptyObject(ego_selections))
            return
        var now_attr = JSON.stringify(self.model.get("attribute"));
        var data_mode = self.model.get("view_mode");
        var data_group = self.model.get("dataset_group");
        var all_ego = [];
        // console.log(self.model.get("attribute"));
        // console.log(self.model.get("attr_option"));
        // $("#sidekey_submit").text("Update");
        // $("#sidekey_submit").attr("disabled", true);
        // $("#sidekey_img").attr("disabled", true);
        // $("#block_layer").show();

        var update_info = data_mode + ":-" + data_group + ":-" + now_attr;

        for(ego in ego_selections){
            update_info += ":=" + ego;
            all_ego.push(ego);
        }

        var request_url = "update_structure/?restructure="+update_info;        
        d3.json(request_url, function(result) {
            console.log("in model.restructure");
            var tree_structure = self.model.get("tree_structure");
            // console.log(result);
            var set_restructure = function(data, sub){
                // egos_data[mode] = data;
                for(var i = 0; i < sub.length; i++){
                    for(var d in data){
                        if(d in tree_structure[data_mode]){
                            tree_structure[data_mode][d][sub[i]] = data[d][sub[i]];            
                        }
                        else{
                            tree_structure[data_mode][d] = {};
                            tree_structure[data_mode][d][sub[i]] = data[d][sub[i]];
                        }
                    }
                }                
            };
            set_restructure(result, all_ego);
            self.model.trigger('change:tree_structure');            
        });
    }

});
