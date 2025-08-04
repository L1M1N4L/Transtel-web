
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
    });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });

    // MEGA DROPDOWN FUNCTIONALITY
    $(document).ready(function() {
        const categoryItems = $('.category-item');
        const productCategories = $('.product-category-content');

        // Category switching functionality
        categoryItems.on('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all categories
            categoryItems.removeClass('active');
            $(this).addClass('active');

            // Hide all product categories
            productCategories.removeClass('active');

            // Show the selected category with animation
            const targetCategory = $(this).data('category');
            const targetContent = $(`#${targetCategory}`);
            
            if (targetContent.length) {
                targetContent.addClass('active');
                
                // Add entrance animation
                targetContent.find('.product-series').each(function(index) {
                    $(this).css({
                        'opacity': '0',
                        'transform': 'translateY(20px)'
                    });
                    
                    setTimeout(() => {
                        $(this).animate({
                            'opacity': '1',
                            'transform': 'translateY(0)'
                        }, 300 + (index * 100));
                    }, 100);
                });
            }
        });

        // Hover effects for product items
        $('.product-list li').hover(
            function() {
                $(this).addClass('hovered');
            },
            function() {
                $(this).removeClass('hovered');
            }
        );

        // Desktop hover functionality for mega dropdown
        if ($(window).width() > 991) {
            $('.nav-item.dropdown').hover(
                function() {
                    $(this).addClass('show');
                    $(this).find('.dropdown-menu').addClass('show');
                },
                function() {
                    $(this).removeClass('show');
                    $(this).find('.dropdown-menu').removeClass('show');
                }
            );
        }

        // Mobile dropdown toggle
        $('.dropdown-toggle').on('click', function(e) {
            if ($(window).width() <= 991) {
                e.preventDefault();
                const dropdown = $(this).siblings('.dropdown-menu');
                dropdown.toggleClass('show');
            }
        });

        // Close dropdown when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.nav-item.dropdown').length) {
                $('.nav-item.dropdown').removeClass('show');
                $('.dropdown-menu').removeClass('show');
            }
        });

        // Responsive adjustments
        $(window).resize(function() {
            if ($(window).width() > 991) {
                $('.dropdown-menu').removeClass('show');
            }
        });

        // Initialize first category as active
        if (categoryItems.length > 0) {
            const firstCategory = categoryItems.first();
            const firstCategoryId = firstCategory.data('category');
            const firstContent = $(`#${firstCategoryId}`);
            
            if (firstContent.length) {
                firstContent.addClass('active');
            }
        }
    });
    
  })(window.jQuery);
